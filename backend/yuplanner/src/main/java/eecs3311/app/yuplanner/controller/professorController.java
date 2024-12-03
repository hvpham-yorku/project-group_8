package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.model.professor;
import eecs3311.app.yuplanner.service.professorService;

@RestController
@RequestMapping("/professor")
@CrossOrigin
public class professorController {
    @Autowired
    private professorService professorService;

    @PostMapping("/add")
    public String add(@RequestBody professor professor) {
        professorService.saveProfessor(professor);
        return "New prof is added";
    }

    @GetMapping("/getAll")
    public List<professor> getAllProfessors() {
        return professorService.getAllProfessors();
    }

    @PostMapping("/find")
    public professor findProfessor(@RequestBody professor professor) {
        professor foundProfessor = professorService.findProfessor(professor);
        if (foundProfessor != null) {
            return foundProfessor;
        } else {
            // Return a custom error or response indicating the student was not found
            return null;  // Or you can throw an exception or return an error message
        }
    }
}