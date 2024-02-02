package com.productiv.item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductivService 
{
	@Autowired
    private ItemsRepository repo;

	public Item create(Item item)
	{
		return repo.save(item);
	}
    public List<Item> findAll()
	{
		return repo.findAll();
	}

    public Item findById(Long id) {
		
        return repo.findById(id).get();
		
	}

    public String deleteId(Long id)
	{
		repo.deleteById(id);
		return "Item number, " + id  + " has been deleted!";
	}
	
	public Item update (Item item)
	{
		return repo.save(item);
	}


}
