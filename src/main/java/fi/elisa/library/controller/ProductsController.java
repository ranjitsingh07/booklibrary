package fi.elisa.library.controller;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileNotFoundException;
import java.io.FileReader;

@RestController
@RequestMapping("/rest")
public class ProductsController {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/products/list")
    public ResponseEntity<?> getProductsList() {
        JSONObject jsonObject = null;
        JSONParser parser = new JSONParser();
        try {
            Object object = parser
                    .parse(new FileReader("src/main/resources/products.json"));

            //convert Object to JSONObject
             jsonObject = (JSONObject) object;
        } catch (FileNotFoundException e) {
            log.info("File Not Found Exception While Parsing JSON : "+e.getMessage());
        } catch (Exception e) {
            log.info("Exception While Parsing JSON : "+e.getMessage());
        }
        if(jsonObject.size() <= 0){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(jsonObject);
    }
}
