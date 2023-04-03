package com.productiv.restfulwebservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ListOfStaticItems {
	
	private static List <Items> someItems = new ArrayList<Items>();
	private static int idCounter = 0;
	
	
	static {
		someItems.add(new Items(idCounter++, "Abdirahman", "dfsafasdfdsa", "Complete"));
		someItems.add(new Items(idCounter++, "Learnghghjg React", "fasdfdsadsfdfs", "Incomplete"));
		someItems.add(new Items(idCounter++, "Golf", "fsadfdsadafs", "Complete"));
		someItems.add(new Items(idCounter++, "Learn Basketball", "fadfadfdas", "Incomplete"));
		someItems.add(new Items(idCounter++, "Learn Angular", "afsdfdsafdsadasf", "Incomplete"));
		someItems.add(new Items(idCounter++, "Jog", "fdsafdsa", "Incomplete"));
		someItems.add(new Items(idCounter++, "Learn Angular", "afsdfdsafdsadasf", "Incomplete"));

	}
	
	public List<Items> findAll()  // Change Items to Item
	{
		return someItems;
	}
	
	public Items deleteId(long id)
	{
		Items deleteItem = findId(id);
		if(deleteItem==null) return null;

		if (someItems.remove(deleteItem))
		{
			return deleteItem;

		}
		return null;
	}
	
	public Items updateId (Items item) 
	{
		if(item.getId()== -1 || item.getId() == 0)
		{
			item.setId(idCounter++);
			someItems.add(item);
		}
		else
		{
			deleteId(item.getId());
			someItems.add(item);
		}
		
		return item;
	
	}
	public Items findId(long id) {
		for(Items item: someItems)
		{
			if(item.getId() == id)
			{
				return item;
			}
		}
		
		return null;
	}
	

}