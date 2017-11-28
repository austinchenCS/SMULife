<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

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
	$query = "SELECT salt FROM salt WHERE id=:id;";
	$sth = $this->db->prepare($query);
        $sth->execute(array(":id" => $id));

	$todos = $sth->fetchAll();
	$salt = $todos[0]['salt'];

	$pass = hash('sha256', $pass . $salt); //Hash password with SHA256
	$query = "SELECT picture FROM ra WHERE id=:id AND password=:pass";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":id" => $id, ":pass" => $pass));
        try
        {
                $todos = $sth->fetchAll();

		if(count($todos) > 0)
		{
			$todos[] = array(type => 'ra');
		}
		else
		{
		       $query = "SELECT picture FROM student WHERE id=:id AND password=:pass";
		       $sth = $this->db->prepare($query);
			$sth->execute(array(":id" => $id, ":pass" => $pass));
	        	try
        		{
                		$todos = $sth->fetchAll();

                		if(count($todos) > 0)
                		{
                        		$todos[] = array(type => 'student');
                		}
				else
				{
					$todos = array(array(type => 'failure'));
				}
        		}
        		catch(PDOException $e)
        		{
				$todos = array(array(type => 'failure'));
			}
		}
        }
        catch(PDOException $e)
       {

        	$todos = array(array(type => 'failure'));
//$todos =0;
	}
  return $this->response->withJson($todos);
    });

/*
 $app->get('/studentLogin', function ($request, $response, $args) {

        $id = $_GET["id"]; //Get query from parameter
        $pass = $_GET["pass"];
        $query = "SELECT * FROM student WHERE id=:id AND password=:pass";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":id" => $id, ":pass" => $pass));
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

*/
 $app->post('/signup', function ($request, $response, $args) {

	if($_REQUEST["isra"])
	{
		$table = ra;
	}
	else			//RA or student table
	{
		$table = student;
	}


	//Check to see if account exists
        $id = $_REQUEST["id"]; //Get query from parameter
	$query = "SELECT * FROM $table WHERE id=:id";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":id" => $id));
        try
        {
        	$todos = $sth->fetchAll();

        	if(count($todos) > 0)
                {
			$success = False;
                	$todos = array(array(success => False));
                }
                else
                {
			$success = True;
                	$todos = array(array(success => True));
                }
        }
        catch(PDOException $e)
        {
		$success = False;
        	$todos = array(array(success => False));
        }

	if(!$id)
	{
	$success = False;
        $todos = array(array(success => False));
	}


	if($success)	//Only do if account is new
{
	$firstname = $_REQUEST["firstname"];
	$lastname = $_REQUEST["lastname"];
	$email = $_REQUEST["email"];
	$pass = $_REQUEST["pass"];
	$phone = $_REQUEST["phone"];//Get query from parameter
	$dorm = $_REQUEST["dorm"];
	$room = $_REQUEST["room"];
	$ename = $_REQUEST["ename"];
	$erelation = $_REQUEST["erelation"];
        $ephone = $_REQUEST["ephone"];

	$salt = random_bytes(256);
        $query = "insert into salt (id, salt) values (:id, :salt);";
        $sth = $this->db->prepare($query);				//Salting passwords
        $sth->execute(array(":id" => $id, ":salt" => $salt));

	$pass = hash('sha256', $pass . $salt);

	$query = "insert into $table (firstname, lastname, email, password, phone, id, dorm, room, ename, erelation, ephone) values (:firstname, :lastname, :email, :pass, :phone, :id, :dorm, :room, :ename, :erelation, :ephone);";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":firstname" => $firstname, ":lastname" => $lastname, ":email" => $email, ":pass" => $pass, ":phone" => $phone, ":id" => $id, ":dorm" => $dorm, ":room" => $room, ":ename" => $ename, ":erelation" => $erelation, ":ephone" => $ephone));


}

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


    $app->post('/feedback', function ($request, $response, $args) {

        $ra_id = $_REQUEST["id"];
	$feedback = $_REQUEST["feedback"];
        $query = "insert into feedback (ra_id, feedback) values ('$ra_id', '$feedback');";
        $sth = $this->db->prepare($query);
        $sth->execute();
        $todos = array(array(success => True));

  return $this->response->withJson($todos);
    });

   $app->get('/{ra_id}/feedback', function ($request, $response, $args) {

	  $ra_id=$args['ra_id'];
//          $ra_id = $_GET["ra_id"]; //Get query from parameter
          $query = "SELECT feedback FROM feedback WHERE ra_id=:ra_id;";
          $sth = $this->db->prepare($query);
          $sth->execute(array(":ra_id" => $ra_id));
	//echo var_dump($sth);
          try
	{
                  $todos = $sth->fetchAll();
		 //echo var_dump($todos);
		//$todos = 'log succesful';
                  if(count($todos) > 0)
                  {
                       	 // $todos =  "Request Successful";
			  //while ($row = $sth->fetchArray()) {
                          // echo "Feedback: " . $row["feedback"] . "<br>";
                         //}
			//echo $todos;
                  } 
          }
          catch(PDOException $e)
          {
                 $todos = 'Request Failed';
          }
    return $this->response->withJson($todos);
      });


    /*
    $app->get('/getplz/{name}', function ($request, $response, $args) {
        $todos = 0;
         $name = $req->getAttribute('name', '== not set ==');
        echo $name;
        return $this->response->withJson($todos);
    });*/

      $app->get('/{current_id}/current_ra', function ($request, $response, $args) {

              // $current_id = $_GET["resident_id"]; //Get query from parameter
              $current_id=$args['current_id'];
	      $query = "SELECT ra.firstname, ra.lastname FROM ra JOIN student ON substr(ra.room, 1, 1)=substr(student.room, 1, 1) AND ra.dorm=student.dorm WHERE student.id=:current_id;";
              $sth = $this->db->prepare($query);
              $sth->execute(array(':current_id' => $current_id));
              try
              {
                      $todos = $sth->fetchAll();
              }
              catch(PDOException $e)
              {
                      $todos = 'Query Failed';
              }

        return $this->response->withJson($todos);
          });

  $app->get('/{ra_id}/get_residents', function ($request, $response, $args) {

              // $current_id = $_GET["resident_id"]; //Get query from parameter
              $ra_id=$args['ra_id'];
              $query = "SELECT student.firstname, student.lastname FROM ra JOIN student ON substr(ra.room, 1, 1)=substr(student.room, 1, 1) AND ra.dorm=student.dorm WHERE ra.id=:ra_id;";
              $sth = $this->db->prepare($query);
              $sth->execute(array(":ra_id"=>$ra_id));
              try
              {
                      $todos = $sth->fetchAll();
              }
              catch(PDOException $e)
              {
                      $todos = 'Query Failed';
              }

        return $this->response->withJson($todos);
          });

	 $app->get('/{event_id}/get_event', function ($request, $response, $args) {

                        $event_id=$args['event_id'];
               	        $query = "SELECT * FROM event WHERE event.event_id=:event_id;";
                        $sth = $this->db->prepare($query);
                        $sth->execute(array(":event_id" => $event_id));
                        try
                        {
                                $todos = $sth->fetchAll();
			}
			catch(PDOException $e)
                        {
                                $todos = 'Query Failed';
                        }

                  return $this->response->withJson($todos);
                    });

$app->get('/{student_id}/getOrders', function ($request, $response, $args) {

		$id=$args['student_id'];
		$query = "SELECT * FROM ra WHERE id=:id";
	        $sth = $this->db->prepare($query);
        	$sth->execute(array(":id" => $id));
 
                $todos = $sth->fetchAll();

                if(count($todos) > 0)
                {
                        $table = "ra";
                }
                else
                {
                        $table = "student";
                }

		$query = "SELECT firstname, lastname, room, description FROM $table JOIN worder ON worder.id=$table.id WHERE $table.id=:id;";
		$sth = $this->db->prepare($query);
                $sth->execute(array(":id" => $id));

		$todos = $sth->fetchAll();
		return $this->response->withJson($todos);
                   	});


    $app->get('/get_calendar', function ($request, $response, $args) {
                    $query = "SELECT eventname, description, firstname, picurl FROM event JOIN ra ON uid=id;";
                          $sth = $this->db->prepare($query);
                          $sth->execute();
                          try
                          {
                                  $todos = $sth->fetchAll();
                          }
                          catch(PDOException $e)
                          {
                                  $todos = 'Query Failed';
                          }

                    return $this->response->withJson($todos);
                      });


    $app->get('/[{name}]', function (Request $request, Response $response, array $args) {
        // Sample log message
        $this->logger->info("Slim-Skeleton '/' route");

        // Render index view
        return $this->renderer->render($response, 'index.phtml', $args);
    });
//This is an event post request
$app->post('/createEvent', function ($request, $response, $args){
        //$event_id = $_REQUEST["event_id"];
        $eventname = $_REQUEST["name"];
        //$location = $_REQUEST["location"];
        //$datetime = $_REQUEST["datetime"];
        $description = $_REQUEST["description"];
        $uid = $_REQUEST["id"];
//        $picurl = $_REQUEST["picture"];
        $data = $_REQUEST["picture"];

        if($data)
{
        $data = base64_decode($data);
        $fileName = hash('sha256', $data) . '.png';
        file_put_contents('../public/' . $fileName,$data);
}

        $picurl = $fileName;

        $query="insert into event (eventname, description, uid, picurl) values (:eventname, :description, :uid, :picurl);";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":eventname" => $eventname, ":description" => $description, ":uid" => $uid, ":picurl" => $picurl));
        //$todos = 'Query Submitted';
	$todos = array(array(success => True));
        return $this->response->withJson($todos);
    });

//work order post request, inserts into worder table
$app->post('/createWorkOrder', function ($request, $response, $args){
        $id = $_REQUEST["id"];
        $description = $_REQUEST["description"];
        $query="insert into worder (id, description) values (:id, :description);";
        $sth = $this->db->prepare($query);
              if(is_numeric($id)==true && $description!=null)
              {
                      $sth->execute(array(":id" => $id, ":description" => $description));
		      $todos = 'Order Submitted';
              }
              else
              {
                      $todos = 'Query Failed';
              }
        return $this->response->withJson($todos);
        });
//updates an ra or student information
$app->put('/{id}/update',function($request,$response,$args){

	$id=$args['id'];
        $query = "SELECT * FROM ra WHERE id=:id";
        $sth = $this->db->prepare($query);
        $sth->execute(array(":id" => $id));
        $todos = $sth->fetchAll();
        if(count($todos) > 0)
        {
             $table = "ra";
        }
        else
        {
             $table = "student";
        }
        $email = $_REQUEST["email"];
        $pass = $_REQUEST["pass"];

        $salt = random_bytes(256);
        $query = "UPDATE salt SET id=:id, salt=:salt;";
        $sth = $this->db->prepare($query);                              //Salting passwords
        $sth->execute(array(":id" => $id, ":salt" => $salt));

        $pass = hash('sha256', $pass . $salt);

        $phone = $_REQUEST["phone"];
        $dorm = $_REQUEST["dorm"];
        $room = $_REQUEST["room"];
        $ename = $_REQUEST["ename"];
        $erelation = $_REQUEST["erelation"];
        $ephone = $_REQUEST["ephone"];

	$data = $_REQUEST["picture"];

	if($data)
	{
		$data = base64_decode($data);
		$fileName = hash('sha256', $data) . '.png';
		file_put_contents('../public/' . $fileName,$data);
	}

	$picture = $fileName;
        $query = "UPDATE $table SET email=:email, password=:pass, phone=:phone, dorm=:dorm, room=:room, ename=:ename, erelation=:erelation, ephone=:ephone, picture=:picture WHERE id=:id";
        $sth = $this->db->prepare($query);
        try
	{
		$sth->execute(array(":email" => $email, ":pass" => $pass, ":phone" => $phone, ":id" => $id, ":dorm" => $dorm, ":room" => $room, ":ename" => $ename, ":erelation" => $erelation, ":ephone" => $ephone, ":picture" => $picture));
        	$todos = array(array("success" => True));
	}
	catch(PDOException $e)
        {
		$todos = array(array("success" => False));
	}
        return $this->response->withJson($todos);

});


// gets all work orders for students under a particular RA

  $app->get('/{ra_id}/getStudentOrders', function ($request, $response, $args) {

                        // $current_id = $_GET["resident_id"]; //Get query from parameter
                        $ra_id=$args['ra_id'];
                        $query = "SELECT student.firstname, student.lastname, worder.description, student.room, student.dorm 
                        FROM ra JOIN student ON substr(ra.room, 1, 1)=substr(student.room, 1, 1) AND ra.dorm=student.dorm
                        JOIN worder ON worder.id=student.id OR worder.id=ra.id
                        WHERE ra.id=:ra_id;";
                        $sth = $this->db->prepare($query);
                        $sth->execute(array(":ra_id"=>$ra_id));
                        try
                        {
                                $todos = $sth->fetchAll();
                        }
                        catch(PDOException $e)
                        {
                                $todos = 'Query Failed';
                        }

                  return $this->response->withJson($todos);
                    });


//gets student profile information
$app->get('/{id}/info', function ($request, $response, $args) {
        $id=$args['id'];
                $query = "SELECT * FROM ra WHERE id=:id";
                $sth = $this->db->prepare($query);
                $sth->execute(array(":id" => $id));

                $todos = $sth->fetchAll();

                if(count($todos) > 0)
                {
                        $table = "ra";
                }
                else
                {
                        $table = "student";
                }

        $query = "SELECT firstname, lastname, email, phone, id, dorm, room, ename, erelation, ephone, picture FROM $table WHERE id='$id';";
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

