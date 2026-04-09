package com.computadorbussola.crudpc.repository;

import com.computadorbussola.crudpc.model.Computador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComputadorRepository extends JpaRepository<Computador, Long> {
}