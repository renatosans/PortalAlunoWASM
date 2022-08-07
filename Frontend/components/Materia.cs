using System;


namespace PortalAlunoWASM
{
    public class Materia
    {
        public int codigo { get; set; }

        public String nome { get; set; }

        public String descricao { get; set; }

        public Materia() {
            codigo    = 0;
            nome      = "";
            descricao = "";
        }
    }

}
