package com.productiv.restfulwebservices;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "localhost:4200")
public class ProductivResource {
	
	@Autowired
	private ListOfStaticItems itemsService;
	
	@GetMapping("/users/{userName}/items")
	public  List<Items> getAllItems(@PathVariable String userName)
	{
		return itemsService.findAll();
	}
	@DeleteMapping("/users/{userName}/items/{id}")
	public ResponseEntity<Void> deleteItem (@PathVariable String userName, @PathVariable long id) {
		Items item = itemsService.deleteId(id);
		if(item != null) 
		{
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	@PostMapping("/users/{userName}/items")
	public ResponseEntity<Void> postItems (@PathVariable String userName, @RequestBody Items item) {
	
	Items postItem = itemsService.updateId(item);	
	
	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(postItem.getId()).toUri();
	
	return ResponseEntity.created(uri).build();
	
	}
	@PutMapping("/users/{userName}/items/{id}")
	public ResponseEntity<Items> updateItems (@PathVariable String userName, @PathVariable long id, @RequestBody Items item) {
	
	Items updatedItem = itemsService.updateId(item);
		
	return new ResponseEntity <Items> (item, HttpStatus.OK);
	
	}

}