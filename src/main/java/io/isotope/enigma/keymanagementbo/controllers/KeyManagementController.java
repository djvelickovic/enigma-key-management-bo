package io.isotope.enigma.keymanagementbo.controllers;

import io.isotope.enigma.client.KeySpecificationReduced;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@RestController
@RequestMapping("/keys")
public class KeyManagementController {

    private final WebClient webClient;

    public KeyManagementController(@Qualifier("enigmaWebClient") WebClient webClient) {
        this.webClient = webClient;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<KeySpecificationReduced>> getKeys(@RequestHeader("Authorization") String auth) {
        return webClient.get()
                .uri("keys")
                .header("Authorization", auth)
                .retrieve()
                .toEntityList(KeySpecificationReduced.class)
                .block();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createKey(@RequestHeader("Authorization") String auth, @RequestBody NewKeyRequest newKeyRequest) {
        webClient.post()
                .uri("keys")
                .header("Authorization", auth)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(newKeyRequest)
                .retrieve()
                .toBodilessEntity()
                .block();

        return ResponseEntity.ok().build();
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateKey(@RequestHeader("Authorization") String auth, @RequestBody NewKeyRequest newKeyRequest) {
        webClient.post()
                .uri("keys")
                .header("Authorization", auth)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(newKeyRequest)
                .retrieve()
                .toBodilessEntity()
                .block();

        return ResponseEntity.ok().build();
    }
}
