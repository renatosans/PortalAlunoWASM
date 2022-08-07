using System;
using System.Text.Json;


namespace PortalAlunoWASM.components
{
    public class Professor
    {
        public int id { get; set; }
        public String nome { get; set; }
        public String email { get; set; }
        public Object foto { get; set; }
        public String formatoImagem { get; set; }

        public String GetFoto()
        {
            JsonElement element = (JsonElement)foto; // element.Deserialize(...
            return element.ToString();
        }
    }
}
