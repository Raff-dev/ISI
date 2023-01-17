package org.example;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.web.client.RestTemplate;
import spinjar.com.fasterxml.jackson.databind.JsonNode;
import spinjar.com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.logging.Logger;


public class GetDrinkClient implements JavaDelegate{
    private final Logger LOGGER = Logger.getLogger(LoggerDelegate.class.getName());
    public void execute(DelegateExecution execution) throws IOException{
        LOGGER.info("started DrinkClient");
        String hour = (String) execution.getVariable("hour");
        String desired_language = (String) execution.getVariable("desired_language");
        LOGGER.info(hour);
        LOGGER.info(desired_language);
        execution.setVariable("hour", Integer.parseInt(hour));
        execution.setVariable("desired_language", desired_language);
        LOGGER.info(String.valueOf(hour));
    }
}
