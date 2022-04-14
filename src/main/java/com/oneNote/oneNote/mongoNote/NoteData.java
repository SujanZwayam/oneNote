package com.oneNote.oneNote.mongoNote;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Notes")
public class NoteData {
	
	@Id
	private String id;
	
	private String createdBy;
	private String createdDate;
	private String title;
	private String content;
	
	public NoteData() {}
	
	public void setId(String id) {
    	this.id = id;
    }
    
    public String getId() {
    	return this.id;
    }
    
    public void setCreatedBy(String createdBy) {
    	this.createdBy = createdBy;
    }
    
    public String getCreatedBy() {
    	return this.createdBy;
    }
    
    public void setCreatedDate(String createdDate) {
    	this.createdDate = createdDate;
    }
    
    public String getCreatedDate() {
    	return this.createdDate;
    }
    
    public void setTitle(String title) {
    	this.title = title;
    }
    
    public String getTitle() {
    	return this.title;
    }
    
    public void setContent(String content) {
    	this.content = content;
    }
    
    public String getContent() {
    	return this.content;
    }
}
