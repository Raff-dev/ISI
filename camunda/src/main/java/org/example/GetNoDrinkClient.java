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



public class GetNoDrinkClient implements JavaDelegate{
    private final Logger LOGGER = Logger.getLogger(LoggerDelegate.class.getName());
    public void execute(DelegateExecution execution) throws IOException{
        RestTemplate restTemplateForApp = new RestTemplate();
        HttpHeaders headersForApp = new HttpHeaders();
        headersForApp.setContentType(MediaType.APPLICATION_JSON);
        JSONObject jsonForApp = new JSONObject();
        jsonForApp.put("drinks", "Gentelmeni nie piją przed 12");
        HttpEntity<String> entity = new HttpEntity<String>("", headersForApp);
        LOGGER.info(jsonForMule.toJSONString());
        ResponseEntity<String> responseFromApp = restTemplate.exchange("localhost:8001/enquiry", HttpMethod.POST, entity, String.class, headersForApp);
    }
}