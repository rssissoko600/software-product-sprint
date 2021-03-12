package com.google.sps.servlets;

import java.util.*; 
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /index! 
* Writes a hard-coded string as the response when a user requests its URL. */
@WebServlet("/fact")
public class RandomServlet extends HttpServlet {
  
   private final ArrayList<String> randoFact = new ArrayList<String>(){
      {
        add("I was apart of a commercial for Black History Month!");
        add("I created my first app on Google Play at 12 years old!");
        add("I love to eat seafood: crab legs, mussels. shrimp, and clams.");
        add("I was born and raised in The Bronx, New York.");
      }
   };

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    //random fact about Rokia
    String json = convertToJson(randoFact);

    response.setContentType("text/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ArrayList<String> instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(ArrayList<String> randoFact) {
    String json = " ";
    json+= "\"" + randoFact.get((int)Math.floor(Math.random() * randoFact.size())) + "\"";
    
    return json;
  }
}