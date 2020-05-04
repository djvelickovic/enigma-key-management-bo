package io.isotope.enigma.keymanagementbo.controllers;

import io.isotope.enigma.client.KeyManagementClient;
import io.isotope.enigma.client.KeySpecificationReduced;
import io.isotope.enigma.client.UpdateKeyRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/keys")
public class KeyManagementController {

    private final KeyManagementClient keyManagementClient;

    public KeyManagementController(KeyManagementClient keyManagementClient) {
        this.keyManagementClient = keyManagementClient;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<KeySpecificationReduced>> getKeys(@RequestHeader("Authorization") String auth) {
        return ResponseEntity.ok(keyManagementClient.getKeys());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createKey(@RequestHeader("Authorization") String auth, @RequestBody NewKeyRequest newKeyRequest) {
        keyManagementClient.createKey(newKeyRequest.getName());
        return ResponseEntity.ok().build();
    }

    @PutMapping(path = "/{key}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateKey(
            @RequestHeader("Authorization") String auth,
            @PathVariable String key,
            @RequestBody UpdateKeyRequest updateKeyRequest) {
        keyManagementClient.updateKey(key, updateKeyRequest);
        return ResponseEntity.ok().build();
    }

    public String getAuthToken(String headerValue) {
        if (headerValue != null) {
            String[] tokens = headerValue.split(" ");
            if (tokens.length > 0) {
                return tokens[1];
            }
        }
        return null;
    }
}
