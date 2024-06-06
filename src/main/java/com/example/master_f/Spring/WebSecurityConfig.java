/*
 * import java.beans.Customizer;
 * 
 * import org.springframework.context.annotation.Bean; import
 * org.springframework.context.annotation.Configuration; import
 * org.springframework.security.config.annotation.authentication.builders.
 * AuthenticationManagerBuilder; import
 * org.springframework.security.config.annotation.web.builders.HttpSecurity;
 * import org.springframework.security.config.annotation.web.configuration.
 * EnableWebSecurity; import
 * org.springframework.security.config.annotation.web.configuration.
 * WebSecurityConfigurerAdapter; import
 * org.springframework.security.core.userdetails.UserDetailsService; import
 * org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; import
 * org.springframework.security.web.SecurityFilterChain;
 * 
 * @Configuration
 * 
 * @EnableWebSecurity public class WebSecurityConfig {
 * 
 * @Bean SecurityFilterChain configure(HttpSecurity http) throws Exception {
 * 
 * http.authorizeHttpRequests(auth -> auth .requestMatchers("/").permitAll()
 * .requestMatchers("/new").hasAnyRole("USER", "ADMIN")
 * .requestMatchers("/edit/*", "/delete/*").hasRole("ADMIN")
 * .anyRequest().authenticated())
 * 
 * .httpBasic(Customizer.withDefaults())
 * 
 * .exceptionHandling(ex -> ex.accessDeniedPage("/403"));
 * 
 * return http.build(); } }
 */