package org.example;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import spinjar.com.fasterxml.jackson.databind.JsonNode;
import spinjar.com.fasterxml.jackson.databind.ObjectMapper;
import spinjar.com.minidev.json.JSONObject;

import java.io.IOException;
import java.util.Random;
import java.util.logging.Logger;



public class GetDrinkFromList implements JavaDelegate{
    private final Logger LOGGER = Logger.getLogger(LoggerDelegate.class.getName());
    public void execute(DelegateExecution execution) throws IOException{
        LOGGER.info("started GetDrinkFromList");
        Random rand = new Random();
        String to_lang = (String) execution.getVariable("desired_language");
        String username = (String) execution.getVariable("username");
        int n = rand.nextInt(10);
        //String URL = "https://eee414bf-303a-4f20-b48e-66b0bf3c0731.mock.pstmn.io/getDrinkByIdInGivenLanguage";
        String URL = "http://mule:8081/getDrinkByIdInGivenLanguage";
        RestTemplate restTemplate = new RestTemplate();
        JSONObject jsonForMule = new JSONObject();
        jsonForMule.put("id", 11000+n);
        jsonForMule.put("to_lang", to_lang);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("payload", jsonForMule.toJSONString());

        HttpEntity<String> entity = new HttpEntity<String>(jsonForMule.toJSONString(), headers);
        LOGGER.info(jsonForMule.toJSONString());
        ResponseEntity<String> response = restTemplate.exchange(URL, HttpMethod.POST, entity, String.class, headers);

        String responseBody = response.getBody();
        LOGGER.info("order drink result" + responseBody);
        JSONObject jsonResponse = new JSONObject(responseBody);
        JSONObject jsonToResponse = new JSONObject();

        jsonToResponse.put("username", username);
        jsonToResponse.put("drink_id", 11000+n);
        jsonToResponse.put("to_lang", to_lang);
        jsonToResponse.put("data", jsonResponse);
        LOGGER.info(jsonToResponse.toJSONString());
        RestTemplate restTemplateForApp = new RestTemplate();
        HttpHeaders headersForApp = new HttpHeaders();
        headersForApp.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<String>(responseBody, headersForApp);
        ResponseEntity<String> responseFromApp = restTemplate.exchange("localhost:8001/enquiry", HttpMethod.POST, entity, String.class, headersForApp);
    }
}
