package com.oneNote.oneNote.mongoNote;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

@CrossOrigin
@RestController 
@RequestMapping(path="/note") 
public class MainController {
	@Autowired
	private NoteService service;
	
	@PostMapping(path="/create")
	public @ResponseBody String createNewNote(@RequestBody NoteData note) {
		Date date = Calendar.getInstance().getTime();  
        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");  
        String strDate = dateFormat.format(date);  
        note.setCreatedDate(strDate);
		service.createNote(note);
	    return "Note created\n";
	}
	
	@GetMapping(path="/findnotes/{createdBy}")
	public Iterable<NoteData> findbycreated(@PathVariable String createdBy){
		return service.findbycreated(createdBy);
	}
	/*public @ResponseBody Iterable<NoteData> Retrieval() {
		return service.listAll();
	}*/
	
	
	@GetMapping("/find/{name}")
	public ResponseEntity<NoteData> get(@PathVariable String name) {
		try {
			NoteData note = service.getByName(name);
	        return new ResponseEntity<NoteData>(note, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<NoteData>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@GetMapping("/findid/{id}")
	public NoteData getById(@PathVariable String id) {
		try {
			NoteData note = service.getById(id);
			return note;
		} catch(NoSuchElementException e) {
			return  null;
		}
	}
	
	
	@DeleteMapping(path="/delete/{id}/{email}")
	public Iterable<NoteData> deleteUser(@PathVariable String id,@PathVariable String email) {
		try {
	        service.delete(id);
	       return findbycreated(email);
	    } catch (NoSuchElementException e) {
	        return null;
	    } 
	}
}
