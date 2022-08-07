using System;


namespace PortalAlunoWASM
{
    public class Nota
    {
        public int materia { get; set; }

        public String aluno { get; set; }

        public int bimestre { get; set; }

        public Nota(){
            materia  = 0;
            aluno    = "";
            bimestre = 0;
        }
    }

}
