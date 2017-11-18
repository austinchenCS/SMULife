<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

//TO DO:
//Make signup a post request

// get all todos
    $app->get('/todos', function ($request, $response, $args) {

	$query = $_GET["query"]; //Get query from parameter
	if(empty($query)){
		$query = "select * from ra;";
	}
        $sth = $this->db->prepare($query);
        $sth->execute();
	try
	{
       		$todos = $sth->fetchAll();
	}
	catch(PDOException $e)
	{
		$todos = 'Query Submitted';
	}
//$todos =0;
  return $this->response->withJson($todos);
    });

//Testing post requests
    $app->post('/postplz', function ($request, $response, $args) {
	$todos = 0;
	//$query = "insert into event (eventname, location, datetime, description, uid) values (%27testEvent%27, %27SMU%27, %271000-01-01 00:00:00%27, %27Test event%27, 12345678);";
	//$sth = $this->db->prepare($query);
	//$sth->execute();
	return $this->response->withJson($todos);
    });


    $app->get('/login', function ($request, $response, $args) {

        $id = $_GET["id"]; //Get query from parameter
	$pass = $_GET["pass"];
	$query = "SELECT * FROM ra WHERE id='$id' AND password='$pass'";
        $sth = $this->db->prepare($query);
        $sth->execute();
        try
        {
                $todos = $sth->fetchAll();

		if(count($todos) > 0)
		{
			$todos = 'Login Success';
		}
        }
        catch(PDOException $e)
        {
                $todos = 'Login Failed';
        }
//$todos =0;
  return $this->response->withJson($todos);
    });


 $app->get('/studentLogin', function ($request, $response, $args) {

        $id = $_GET["id"]; //Get query from parameter
        $pass = $_GET["pass"];
        $query = "SELECT * FROM student WHERE id='$id' AND password='$pass'";
        $sth = $this->db->prepare($query);
        $sth->execute();
        try
        {
                $todos = $sth->fetchAll();

                if(count($todos) > 0)
                {
                        $todos = 'Login Success';
                }
        }
        catch(PDOException $e)
        {
               $todos = 'Login Failed';
        }
//$todos =0;
  return $this->response->withJson($todos);
    });


 $app->post('/signup', function ($request, $response, $args) {

	$firstname = $_REQUEST["firstname"];
	$lastname = $_REQUEST["lastname"];
	$email = $_REQUEST["email"];
	$pass = $_REQUEST["pass"];
	$phone = $_REQUEST["phone"];
        $id = $_REQUEST["id"]; //Get query from parameter
	$ra_id = $_REQUEST["ra_id"];
        $query = "insert into student (firstname, lastname, email, password, phone, id, ra_id) values ('$firstname', '$lastname', '$email', '$pass', '$phone', '$id', '$ra_id');";
        $sth = $this->db->prepare($query);
        $sth->execute();
                $todos = 'Query Submitted';

  return $this->response->withJson($todos);
    });


    $app->get('/residentInfo', function ($request, $response, $args) {

        $id = $_GET["id"]; //Get query from parameter
        $query = "SELECT email, phone, emergency FROM student WHERE id='$id';";
        $sth = $this->db->prepare($query);
        $sth->execute();
        try
        {
                $todos = $sth->fetchAll();
        }
        catch(PDOException $e)
        {
                $todos = 'Query Submitted';
        }

  return $this->response->withJson($todos);
    });


    $app->get('/feedback', function ($request, $response, $args) {

        $ra_id = $_GET["ra_id"];
	$feedback = $_GET["feedback"];
        $query = "insert into feedback (ra_id, feedback) values ('$ra_id', '$feedback');";
        $sth = $this->db->prepare($query);
        $sth->execute();
        $todos = 'Feedback Submitted';

  return $this->response->withJson($todos);
    });
/
   $app->get('/ra_id/RAfeedback', function ($request, $response, $args) {

          $ra_id = $_GET["ra_id"]; //Get query from parameter
          $query = "SELECT feedback FROM feedback WHERE ra_id='$ra_id'";
          $sth = $this->db->prepare($query);
          $sth->execute();
          try
          {
                  $todos = $sth->fetchAll();
		$todos = 'log succesful';
                /*  if(count($todos) > 0)
                  {
                       	  $todos =  'Request Successful";
			  while ($row = $sth->fetch_assoc()) {
                            echo "Feedback: " . $row["feedback"] . "<br>";
                          }
                  } */
          }
          catch(PDOException $e)
          {
                 $todos = 'Request Failed';
          }
    return $this->response->withJson($todos);
      });
*/


    $app->get('/[{name}]', function (Request $request, Response $response, array $args) {
        // Sample log message
        $this->logger->info("Slim-Skeleton '/' route");

        // Render index view
        return $this->renderer->render($response, 'index.phtml', $args);
    });
//This is a 
