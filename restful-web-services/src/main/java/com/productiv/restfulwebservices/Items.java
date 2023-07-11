package com.productiv.restfulwebservices;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Items {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String description;
	private String completionDate;
	private String isDone;
	public Items () {
		
	}
	public Items(long id, String description, String completionDate, String isDone) {
		super();
		this.id = id;
		this.description = description;
		this.completionDate = completionDate;
		this.isDone = isDone;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCompletionDate() {
		return completionDate;
	}
	public void setCompletionDate(String targetDate) {
		this.completionDate = targetDate;
	}
	public String getIsDone() {
		return isDone;
	}
	public void setIsDone(String isDone) {
		this.isDone = isDone;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Items other = (Items) obj;
		return id == other.id;
	}
	

}
