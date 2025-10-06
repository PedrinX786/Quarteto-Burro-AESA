public abstract class Veiculo {
    private String Placa;
    private int Capacidade;
    private boolean emMovimento;

    public Veiculo(String p, int c){
        this.Placa = p;
        this.Capacidade = c;
        this.emMovimento = false;
    }
    public Veiculo(){
        this.Placa = "000-000";
        this.Capacidade = 35;
        this.emMovimento = false;
    }
    public void status(){
        System.out.println("Placa: " + this.Placa + " | Capacidade: " + this.Capacidade);
        if(emMovimento == true){
            System.out.println("Status: Em Movimento");
        } else {
            System.out.println("Status: parado");
        }
    }

    abstract double calcularTarifa();

    public String getPlaca(){
        return Placa;
    }

    public void setEmMovimento(boolean movimento){
        this.emMovimento = movimento;
    }
}
