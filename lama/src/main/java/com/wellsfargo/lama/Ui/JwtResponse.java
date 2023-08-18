package com.wellsfargo.lama.Ui;

import java.util.List;

public class JwtResponse {
  private String token;
  private String type = "Bearer";
  private int id;
  private List<String> roles;

  

  public JwtResponse(String token, int id, List<String> roles) {
	super();
	this.token = token;
	this.id = id;
	this.roles = roles;
}

public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }



  public List<String> getRoles() {
    return roles;
  }
}