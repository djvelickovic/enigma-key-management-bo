package io.isotope.enigma.keymanagementbo.config;

import io.isotope.enigma.keymanagementbo.config.properties.KeyManagementBoProperties;
import org.apache.catalina.connector.Connector;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Configuration
@Conditional(OnLocalProfile.class)
@EnableConfigurationProperties({KeyManagementBoProperties.class})
public class ServerConfiguration {

    @Bean
    public ServletWebServerFactory servletContainer(KeyManagementBoProperties keyManagementBoProperties) {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        tomcat.addAdditionalTomcatConnectors(getHttpConnector(keyManagementBoProperties));
        return tomcat;
    }

    private Connector getHttpConnector(KeyManagementBoProperties keyManagementBoProperties) {
        Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
        connector.setScheme("http");
        connector.setPort(keyManagementBoProperties.getHttpPort());
        connector.setSecure(false);
//        connector.setRedirectPort(8443);
        return connector;
    }
}
