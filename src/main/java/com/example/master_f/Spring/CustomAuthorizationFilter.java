/*
 * import
 * org.springframework.security.access.intercept.AbstractSecurityInterceptor;
 * import org.springframework.security.access.intercept.InterceptorStatusToken;
 * import org.springframework.security.core.Authentication; import
 * org.springframework.security.core.context.SecurityContextHolder; import
 * org.springframework.security.web.FilterInvocation; import
 * org.springframework.security.web.access.intercept.
 * FilterInvocationSecurityMetadataSource; import
 * org.springframework.stereotype.Component;
 * 
 * import java.io.IOException;
 * 
 * import javax.servlet.*;
 * 
 * @Component public class CustomAuthorizationFilter extends
 * AbstractSecurityInterceptor implements Filter {
 * 
 * private final FilterInvocationSecurityMetadataSource securityMetadataSource;
 * 
 * public CustomAuthorizationFilter(FilterInvocationSecurityMetadataSource
 * securityMetadataSource) { this.securityMetadataSource =
 * securityMetadataSource; }
 * 
 * @Override public void init(FilterConfig filterConfig) throws ServletException
 * { }
 * 
 * @Override public void doFilter(ServletRequest request, ServletResponse
 * response, FilterChain chain) throws IOException, ServletException {
 * FilterInvocation fi = new FilterInvocation(request, response, chain);
 * invoke(fi); }
 * 
 * public void invoke(FilterInvocation fi) throws IOException, ServletException
 * { InterceptorStatusToken token = super.beforeInvocation(fi); try {
 * fi.getChain().doFilter(fi.getRequest(), fi.getResponse()); } finally {
 * super.afterInvocation(token, null); } }
 * 
 * @Override public void destroy() { }
 * 
 * @Override public Class<?> getSecureObjectClass() { return
 * FilterInvocation.class; }
 * 
 * @Override public FilterInvocationSecurityMetadataSource
 * obtainSecurityMetadataSource() { return this.securityMetadataSource; } }
 */