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
        String username = (String) execution.getVariable("username");
        jsonForApp.put("username", username);
        jsonForApp.put("drink_id", -1);
        jsonForApp.put("to_lang", "pl");
        jsonForApp.put("data", "Gentelmeni nie piją przed 12");
        HttpEntity<String> entity = new HttpEntity<String>(jsonForApp.toJSONString(), headersForApp);
        LOGGER.info(jsonForApp.toJSONString());
        ResponseEntity<String> responseFromApp = restTemplateForApp.exchange("http://django1:8000/enquiry/", HttpMethod.POST, entity, String.class, headersForApp);
    }
}
