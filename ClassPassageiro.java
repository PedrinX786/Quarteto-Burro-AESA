public class Passageiro extends Pessoa {
    private double saldoCartao;
    private String tipoCartao;

    public Passageiro(String nome, String documento, double saldoInicial, String tipo) {
        super(nome, documento);
        this.saldoCartao = saldoInicial;
        this.tipoCartao = tipo;
    }

    public Passageiro() {
        super();
        this.saldoCartao = 0.0;
        this.tipoCartao = "Comum";
    }

    @Override
    public void apresentar() {
        super.apresentar();
        System.out.println("Função: Passageiro | Cartão: " + tipoCartao);
    }

    public boolean pagarViagem(double tarifa) {
        double saldoRestante;

        if (saldoCartao >= tarifa) {
            saldoRestante = saldoCartao - tarifa;
            this.saldoCartao = saldoRestante;
            System.out.println("Pagamento efetuado! Saldo restante: R$" + saldoRestante);
            return true;
        } else {
            System.out.println("Saldo insuficiente! R$" + saldoCartao);
            return false;
        }
    }

    public double getSaldoCartao() {
        return saldoCartao;
    }
}