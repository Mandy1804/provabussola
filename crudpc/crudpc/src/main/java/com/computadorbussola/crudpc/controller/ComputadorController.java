package com.computadorbussola.crudpc.controller;

import com.computadorbussola.crudpc.model.Computador;
import com.computadorbussola.crudpc.repository.ComputadorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/computadores")
public class ComputadorController {

    private final ComputadorRepository repo;

    public ComputadorController(ComputadorRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Computador criar(@RequestBody Computador c) {
        return repo.save(c);
    }

    @GetMapping
    public List<Computador> listar() {
        return repo.findAll();
    }

    @PutMapping("/{id}")
    public Computador atualizar(@PathVariable Long id, @RequestBody Computador c) {
        c.setId(id);
        return repo.save(c);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repo.deleteById(id);
    }
}