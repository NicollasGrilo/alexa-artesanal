<%@page language="java" import="java.sql.*" %>

<%
    // cria as variaveis e armazena as informações digitadas pelo usuario
    String vnome  = request.getParameter("txtnome");
    int vidade = Integer.parseInt(request.getParameter("txtidade") );
    String vcpf = request.getParameter("cpf");
    String vpedido = request.getParameter("txtpedido");
    String vpagamento = request.getParameter("pagamento");


    // variaveis para o banco de dados
    String banco    = "projetoalexa";
    String endereco = "jdbc:mysql://localhost:3306/" + banco;
    String usuario  = "root";
    String senha    = "";

    String driver   = "com.mysql.jdbc.Driver" ;

    //Carregar o driver na memoria
    Class.forName( driver );

    //cria a variavel para conectar com o banco
    Connection conexao ;
    //Abrir a conexao com o banco de dados
    conexao = DriverManager.getConnection(endereco, usuario, senha) ;

    //Cria a variavel sql com o comando de Inserir
    String sql = "INSERT INTO pedidos (nome,idade,cpf,pedido,pagamento) values(?,?,?,?,?)" ;

    PreparedStatement stm = conexao.prepareStatement(sql);
    stm.setString(1, vnome);
    stm.setInt(2, vidade);
    stm.setString(3, vcpf);
    stm.setString(4, vpedido);
    stm.setString(5, vpagamento);

    stm.execute() ;
    stm.close() ;

    response.sendRedirect("Final_Pedido.html");

%>