<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->add(function (Request $request, Response $response, callable $next) {
    $route = $request->getAttribute('route');
    $this->logger->info($request->getMethod() . ' ' . $route->getPattern(), [$route->getArguments()]);
    $response = $next($request, $response);
    $this->logger->info($response->getStatusCode() . ' ' . $response->getReasonPhrase(), [(string)$response->getBody()]);

    return $response;
});
