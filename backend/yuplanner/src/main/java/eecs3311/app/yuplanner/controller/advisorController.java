package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.model.advisor;
import eecs3311.app.yuplanner.service.advisorService;

@RestController
@RequestMapping("/advisor")
@CrossOrigin
public class advisorController {
    @Autowired
    private advisorService advisorService;

    @PostMapping("/add")
    public String add(@RequestBody advisor advisor) {
        advisorService.saveAdvisor(advisor);
        return "New advisor is added";
    }

    @GetMapping("/getAll")
    public List<advisor> getAllAdvisors() {
        return advisorService.getAllAdvisors();
    }
}