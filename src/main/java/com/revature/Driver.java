package com.revature;

import java.util.ArrayList;
import java.util.Scanner;

// The purpose of the Driver class is to Drive or Launch
public class Driver {
    public static void main(String[] args){
        System.out.println("Application started.\n"); // \n prints a new line
        // class to receive user input
        // what is this statement???
        Scanner scanner = new Scanner(System.in);
        // object initialization
        // objects are runtime entities that contain states (variables) and behaviors (methods)
        // classes are blueprints for objects
        System.out.println("Welcome to FlashBash!!");
        String input;

        ArrayList<Flashcard> flashcardsList = new ArrayList<>();

        while(true){
            System.out.println("\nWhat would you like to do?");
            System.out.println("1) Create a Flashcard");
            System.out.println("2) View all Flashcards");
            System.out.println("0) Exit");
            input = scanner.nextLine();
            // switch will receive a variable and then
            switch(input){ // only gets evaluated once
                case "1":
                    // Class varName = new constructor(); -> what does a constructor do??? ->
                    Flashcard flashcard = new Flashcard();
                    System.out.print("Question: ");
                    flashcard.question = scanner.nextLine();
                    System.out.print("Answer: ");
                    flashcard.answer = scanner.nextLine();
                    flashcardsList.add(flashcard);
                    break;
                case "2":
                    for(int i = 0; i < flashcardsList.size(); i++){
                        System.out.println(flashcardsList.get(i));
                    }
                    break;
                case "0":
                    System.out.println("Exiting the application");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Please enter a valid menu option.");
                    break;
            }
        }

    }
}