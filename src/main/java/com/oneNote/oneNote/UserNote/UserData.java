package com.oneNote.oneNote.UserNote;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="userdata_tbl")
public class UserData {
	@Id
	@GeneratedValue
	public int user_id;
	@Column
	public String email;
	@Column
	public String name;
	@Column
	public String password;

}
