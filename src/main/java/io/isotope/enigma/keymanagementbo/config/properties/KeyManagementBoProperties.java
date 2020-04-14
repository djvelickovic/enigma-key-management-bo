package io.isotope.enigma.keymanagementbo.config.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "key-management-bo")
public class KeyManagementBoProperties {

    private Integer httpPort = 8080;

    public Integer getHttpPort() {
        return httpPort;
    }

    public void setHttpPort(Integer httpPort) {
        this.httpPort = httpPort;
    }
}
