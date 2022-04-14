package com.oneNote.oneNote.mongoNote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class NoteService {

	@Autowired
    NoteRepository noteRepo;
	
	public void createNote(NoteData note) {
		noteRepo.save(note);
	}
	
	public Iterable<NoteData> listAll() {
        return noteRepo.findAll();
    }
	
	public NoteData getByName(String name) {
        return noteRepo.findNoteByName(name);
    }
	public Iterable<NoteData> findbycreated(String createdby){
		return noteRepo.findNoteByCreatedby(createdby);
	}
	
	public NoteData getById(String id) {
		return noteRepo.findById(id).orElse(null);
	}
	
	public void delete(String id) {
		noteRepo.deleteById(id);
    }
}
