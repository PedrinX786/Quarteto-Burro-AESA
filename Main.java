public class Main {
    public static void main(String[] args) {
        Onibus onibus1 = new Onibus("099-666", 40, "30");
        Onibus onibus2 = new Onibus();
        onibus1.status();
        System.out.println(onibus1.calcularTarifa());

        Passageiro pass1 = new Passageiro("Ahab","RG1243", 50.0, "comum");
        Passageiro pass2 = new Passageiro();

        pass1.apresentar();
        pass2.apresentar();

        System.out.println(pass1.getDocumento());
        pass1.setDocumento("CPF1111111");
        System.out.println(pass1.getDocumento());
    }
}