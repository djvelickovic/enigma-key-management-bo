package io.isotope.enigma.keymanagementbo.config;

import io.isotope.enigma.keymanagementbo.config.properties.KeyManagementBoProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties({KeyManagementBoProperties.class})
public class KeyManagementBoConfiguration {

}
