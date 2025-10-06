public class segundoMain {
    public static void main(String[] args){
        Onibus onibusE = new Onibus("123-456", 25, "99E");
        Passageiro pass3 = new Passageiro("Moby", "RG4561", 2.0, "Comum");
        Passageiro pass4 = new Passageiro("Dick", "RG9876", 12.0, "Comum");

        double tarifa = onibusE.calcularTarifa();
        System.out.println(tarifa);

        pass3.pagarViagem(tarifa);
        pass4.pagarViagem(tarifa);

        onibusE.notificarProblema(1);
        onibusE.status();

        onibusE.setEmMovimento(true);
        onibusE.notificarProblema(2);
        onibusE.status();
    }
}