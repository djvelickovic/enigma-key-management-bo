package io.isotope.enigma.keymanagementbo.controllers;

import io.isotope.enigma.client.KeyManagementClient;
import io.isotope.enigma.client.KeyMetadataDTO;
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
    public ResponseEntity<List<KeyMetadataDTO>> getKeys() {
        return ResponseEntity.ok(keyManagementClient.getKeys());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createKey(@RequestBody KeyMetadataDTO newKeyRequest) {
        keyManagementClient.createKey(newKeyRequest.getName(), newKeyRequest.getSize());
        return ResponseEntity.ok().build();
    }

    @PutMapping(path = "/{key}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateKey(@PathVariable String key,
                                       @RequestBody KeyMetadataDTO updateKeyRequest) {
        keyManagementClient.updateKey(key, updateKeyRequest.getActive());
        return ResponseEntity.ok().build();
    }
}
