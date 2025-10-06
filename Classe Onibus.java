package modelo;

public class Onibus extends modelo.Veiculo {
    private String numeroLinha;
    private int passageirosAtuais;
    private final double TARIFA_BASE = 4.50;

    public Onibus (String placa, int capacidade, String linha) {
        super(placa, capacidade);
        this.numeroLinha = linha;
        this.passageirosAtuais = 0;
    }
    public Onibus() {
        super();
        this.numeroLinha = "000";
        this.passageirosAtuais = 0;
    }
    @Override
    public double calcularTarifa() {
        if (numeroLinha.endsWith("E")) {
            return TARIFA_BASE * 1.10;
        } else {
            return TARIFA_BASE;
        }
    }
    public void notificarProblema(int codigo) {
    System.out.println("Linha " + numeroLinha + ": ");
    switch (codigo) {
        case 1:
            System.out.println("Pneu furado. Veiculo parado.");
            this.setEmMovimento(false);
            break;
        default:
          System.out.println("Problema desconhecido.");
     }
    }
}
