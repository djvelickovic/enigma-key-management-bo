package io.isotope.enigma.keymanagementbo;

import io.isotope.enigma.client.KeyManagementClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/keys")
public class KeyManagementController {

    private final KeyManagementClient keyManagementClient;

    public KeyManagementController(KeyManagementClient keyManagementClient) {
        this.keyManagementClient = keyManagementClient;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getKeys() {
        return ResponseEntity.ok(keyManagementClient.getKeys());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createKey(@RequestBody NewKeyRequest newKeyRequest) {
        keyManagementClient.createKey(newKeyRequest.getName());
        return ResponseEntity.ok().build();
    }
}
