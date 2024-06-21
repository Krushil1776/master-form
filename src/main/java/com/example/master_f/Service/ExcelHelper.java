package com.example.master_f.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.master_f.Modal.Addadminuser;

import jakarta.mail.internet.MimeMessage;

@Service
public class ExcelHelper {

    private final JavaMailSender javaMailSender;
    private final BCryptPasswordEncoder bCryptPasswordEncod;

    @Autowired
    public ExcelHelper(JavaMailSender javaMailSender, BCryptPasswordEncoder bCryptPasswordEncod) {
        this.javaMailSender = javaMailSender;
        this.bCryptPasswordEncod = bCryptPasswordEncod;
    }

    public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    static String[] HEADERs = { "fname", "lname", "email", "gender", "role"};
    static String SHEET = "Addadminuser";

    public boolean hasExcelFormat(MultipartFile file) {
        return TYPE.equals(file.getContentType());
    }

    public ByteArrayInputStream tutorialsToExcel(List<Addadminuser> tutorials) {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            Sheet sheet = workbook.createSheet(SHEET);

            // Header
            Row headerRow = sheet.createRow(0);

            for (int col = 0; col < HEADERs.length; col++) {
                Cell cell = headerRow.createCell(col);
                cell.setCellValue(HEADERs[col]);
            }

            int rowIdx = 1;
            for (Addadminuser tutorial : tutorials) {
                Row row = sheet.createRow(rowIdx++);

                row.createCell(0).setCellValue(tutorial.getFname());
                row.createCell(1).setCellValue(tutorial.getLname());
                row.createCell(2).setCellValue(tutorial.getEmail());
                row.createCell(3).setCellValue(tutorial.getGender());
                row.createCell(4).setCellValue(tutorial.getRole());
         //       row.createCell(5).setCellValue(tutorial.getActive());
            }

            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
        }
    }

    public List<Addadminuser> excelToTutorials(InputStream is) {
        try {
            Workbook workbook = new XSSFWorkbook(is);
            // Use the first sheet instead of a named sheet
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();

            List<Addadminuser> tutorials = new ArrayList<>();

            int rowNumber = 0;
            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // skip header
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cellsInRow = currentRow.iterator();
                Addadminuser tutorial = new Addadminuser();

                int cellIdx = 0;
                while (cellsInRow.hasNext()) {
                    Cell currentCell = cellsInRow.next();

                    switch (cellIdx) {
                        case 0:
                            tutorial.setFname(currentCell.getStringCellValue());
                            break;
                        case 1:
                            tutorial.setLname(currentCell.getStringCellValue());
                            break;
                        case 2:
                            String e = currentCell.getStringCellValue();
                            String generatedPassword = generateAndSaveRandomPassword();
                    //        sendmail(generatedPassword, e);
                            tutorial.setEmail(e);
//                            tutorial.setPassword(bCryptPasswordEncod.encode(generatedPassword));
                            break;
                        case 3:
                            tutorial.setGender(currentCell.getStringCellValue());
                            break;
                        case 4: // Correct the case index for role
                            tutorial.setRole(currentCell.getStringCellValue());
                            tutorial.setActive(1);

                            break;
                        case 5: // Correct the case index for role
                            break;
                        default:
                            break;
                    }
                    cellIdx++;
                }
                tutorials.add(tutorial);
            }
            workbook.close();
            return tutorials;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }
    }
 
    public String generateAndSaveRandomPassword() {
        return generateRandomPassword(10); // Generate a password of length 10
    }

    private String generateRandomPassword(int length) {
        final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
        final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
        final String DIGIT = "0123456789";
        final String SPECIAL_CHAR = "@#";

        final String PASSWORD_ALLOW_BASE = CHAR_LOWER + CHAR_UPPER + DIGIT + SPECIAL_CHAR;
        SecureRandom random = new SecureRandom();
        StringBuilder password = new StringBuilder(length);

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(PASSWORD_ALLOW_BASE.length());
            password.append(PASSWORD_ALLOW_BASE.charAt(index));
        }

        return password.toString();
    }

    private void sendmail(String password, String email) {
        try {
            // Create a MimeMessage
            MimeMessage message = javaMailSender.createMimeMessage();

            // Create a MimeMessageHelper for composing the email
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            // Set the recipient, subject, and text of the email
            helper.setTo(email);
            helper.setSubject("Welcome to Masterform - Userid and Password");
            helper.setText("Dear FormMaster User,\n\nYour Username: " + email + "\nPassword: "
                    + password + "\n\nWelcome to Master Form.");

            // Send the email
            javaMailSender.send(message);

            System.out.println("Welcome email sent successfully!");
        } catch (Exception e) {
            e.printStackTrace(); // Print the stack trace for debugging
        }
    }
}
