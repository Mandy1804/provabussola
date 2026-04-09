package com.computadorbussola.crudpc.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Computador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cor;
    private Integer dataFabricacao;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "computador_id")
    private List<Periferico> perifericos = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public Integer getDataFabricacao() {
        return dataFabricacao;
    }

    public void setDataFabricacao(Integer dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }

    public List<Periferico> getPerifericos() {
        return perifericos;
    }

    public void setPerifericos(List<Periferico> perifericos) {
        this.perifericos = perifericos;
    }

    public void addPeriferico(Periferico item) {
        this.perifericos.add(item);
    }

    public void removePeriferico(Periferico item) {
        this.perifericos.remove(item);
    }
}