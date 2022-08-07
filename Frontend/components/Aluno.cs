using System;


namespace PortalAlunoWASM
{
    public class Aluno
    {
        public String rg { get; set; }

        public String nome { get; set; }

        public String serie { get; set; }

        public String classe { get; set; }
        
        public Aluno() {
            rg     = "";
            nome   = "";
            serie  = "";
            classe = "";
        }
    }

}
