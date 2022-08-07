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

        /*
        public void InsereFoto() {
            // Para fazer o upload para o banco de dados é necessário aumentar o tamanho do packet
            // SET GLOBAL max_allowed_packet = 850741824

            OpenFileDialog fileDialog = new OpenFileDialog();
            if (fileDialog.ShowDialog() != DialogResult.OK) return;

            String filename = Path.GetFileNameWithoutExtension(fileDialog.FileName);
            Byte[] fileContents = File.ReadAllBytes(fileDialog.FileName);
            String extension = Path.GetExtension(fileDialog.FileName); extension = extension.Trim('.');


            String query = "UPDATE `portal_aluno`.`professor` SET `foto` = '" + Convert.ToBase64String(fileContents) + "', `formatoImagem` = 'image/" + extension + ";base64' WHERE id = " + filename;
            MySqlCommand command = new MySqlCommand(query, mySqlConnection);
            int rowsAffected = command.ExecuteNonQuery();

            MessageBox.Show(rowsAffected + " registro(s) foram inseridos no Banco de Dados");
        }
        */
    }

}
