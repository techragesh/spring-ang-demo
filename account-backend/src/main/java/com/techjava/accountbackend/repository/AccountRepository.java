package com.techjava.accountbackend.repository;

import com.techjava.accountbackend.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
}
