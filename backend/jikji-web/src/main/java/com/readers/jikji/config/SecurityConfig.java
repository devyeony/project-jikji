package com.readers.jikji.config;

import com.readers.jikji.config.jwt.JwtAuthenticationFilter;
import com.readers.jikji.config.jwt.JwtAuthorizationFilter;
import com.readers.jikji.domain.user.Role;

import com.readers.jikji.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserRepository userRepository;

    private final CorsConfig webMvcConfig;

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                    .addFilter(webMvcConfig.corsFilter())
                    .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager(), userRepository))
                    .authorizeRequests()
                        .antMatchers(WebMvcMapping.URL.ROLE_ADMIN + "/**")
                            .access("hasRole(Role.ADMIN.name()) or hasRole(Role.USER.name())")
                        .antMatchers(WebMvcMapping.URL.ROLE_USER + "/**")
                            .hasRole(Role.USER.name())
                        .anyRequest()
                            .permitAll();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
