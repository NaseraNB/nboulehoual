package tasca7Estructuresderepetició2;

import java.util.Scanner;
// Autor: Nasera Boulehoual
public class Repeticio2_1 {

	public static void main(String[] args) {
		/* PEDRA-PAPER-TISORA (millorat) Escriu un programa que jugui 
         * a pedra-paper-tisora. El programa genera un número 0, 1 o 2 
         * representant pedra, paper o tisora. 
         * El programa demana un número a l’usuari 0, 1 o 2 i 
         * mostra un missatge indicant si l’usuari o l’ordinador 
         * guanyen, perden o empaten. 
         * Revisa el programa per permetre a l’usuari 
         * jugar contínuament fins que o bé l’ordinador 
         * o bé l’usuari guanyi tres partides.
         * pedra (0), paper (1), tisores (2): 2
         * Ordinador ha tret tisores. Jugador ha tret tisores. És un empat. */
            
         /* En la pantalla del usuario aparecera un cuadrado dibujado */
         System.out.println("            +----------------+"); 
         System.out.printf("%26s","| " + "0 " + "| PEDRA   "); 
         System.out.println(" ");
         System.out.printf("%24s","| " + "1 " + "| PAPER ");
         System.out.println(" ");
         System.out.printf("%25s","| " + "2 " + "| TISORA ");
         System.out.println(" ");
         System.out.println("            +----------------+");
         System.out.println("\nUS DONEM LA BENVINGUDA AL JOC DE ROCK, PAPER, TISORES ");

        
        Scanner entrada = new Scanner(System.in);
        
        byte contador_jugador = 0, contador_pc =0, jugador, pc;
        // El bucle finalizara hasta que el contador del jugador o el ordenador llegen a tres pardidas ganadas
        while(Math.abs(contador_jugador - contador_pc) < 3) { 
        	// Le pedimoas al usuario que introduca 
        	System.out.print("\nEntra Pedra (0), Paper (1), Tisora (2): ");
        	jugador = entrada.nextByte();
        	// Guardamos los datos del usuario entro de la variable jugador
        	pc = (byte) (Math.random() *3);
            // La variable pc contendra el valor aleatorio del programa.
        	
        	// Si son empates
        	// Si el jugador es igual que el pc.
            if (jugador == pc) {
            	// si nostros sacamos piedra y el programa tambien, saldra un mensjae de empate
                if (pc == 0) {
                    System.out.println("El pc a triat pedra és un empat");
                 // si nostros sacamos papel y el programa tambien, saldra un mensjae de empate
                } else if (pc == 1) {
                    System.out.println("El pc a triat paper és un empat");
                 // si nostros sacamos tijeras y el programa tambien, saldra un mensjae de empate
                } else {
                    System.out.println("El pc a triat tisora és un empat");
                }
            }
            
            // jugador saca piedra y el pc no
            else if (jugador == 0) {
            	
            	// si el jugador saca piedra y el pc saca tijeras nostros ganamos
                if (pc == 1) {
                	
                    System.out.println("El pc a triat tisora tu guanyas");
                    
                    contador_jugador++; // contador contara 1 si a ganado
                    
                    // si el pc a sacado papel, gana el pc
                } else {
                    System.out.println("El pc a triat papel has perdut");
                    contador_pc++; // contador contara 1 si a ganado
                }
            }
            
         // jugador saca papel y el pc no
            else if (jugador == 1) {
            	
            	// si el jugador saca papel y el pc saca piedra nostros ganamos
                if (pc == 2) {
                	
                    System.out.println("El pc a triat pedra tu guanyas");
                    contador_jugador++; // contador contara 1 si a ganado
                    
                 // si el pc a sacado pedra, gana el pc
                } else {
                    System.out.println("El pc a triat tisora has perdut");
                    
                    contador_pc++; // contador contara 1 si a ganado
                }
            }
            
            // jugador saca tijeras y el pc no
            
            else if (jugador == 2) {
            	
            	// si el jugador saca tijeras y el pc saca papel nostros ganamos
                if (pc == 0) {
                    System.out.println("El pc a triat papel tu guanyas");
                    
                    contador_jugador++; // contador contara 1 si a ganado
                 // si el pc a sacado pedra, tu pierdes
                } else {
                    System.out.println("El pc a triat pedra has perdut");
                    contador_pc++; // contador contara 1 si a ganado
                }
            } else {
                System.out.println("Entrada incorrecta");
            }
            
        }
        // Reseultado de la puntacion
        if (contador_jugador > contador_pc) {
            System.out.println("Vas guanyar el joc amb una puntuació " +contador_jugador 
                    +" en comparació amb la puntuació " +contador_pc+ " de la computadora.");
        } else {
            System.out.println("Vas perdre el joc amb una puntuació de " +contador_jugador 
                    +" en comparació amb la puntuació " +contador_pc+ " de la computadora.");
        }
	}
}
