public class Pessoa{

    private String nome;
    private String documento;

    public Pessoa(String nome, String documento) {
        this.nome = nome;
        this.documento = documento;
    }

    public Pessoa() {
        this.nome = "Visitante";
        this.documento = "N/A";
    }

    public void apresentar() {
        System.out.println("Nome: " + nome + ", Doc: " + documento);
    }

    public String getNome() {
        return nome;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }
}