package com.productiv.restfulwebservices;


import org.springframework.data.jpa.repository.JpaRepository;


public interface ItemsRepository extends JpaRepository<Item, Long> 
{

}