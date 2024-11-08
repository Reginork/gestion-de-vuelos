"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/header.css';

const AgendarVueloDirecto = () => {
  const [showModal, setShowModal] = useState(false);
  const [numeroVuelo, setNumeroVuelo] = useState("");
  const [ciudadOrigen, setCiudadOrigen] = useState("");
  const [fechaSalida, setFechaSalida] = useState(null);
  const [tipoVuelo, setTipoVuelo] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [fechaLlegada, setFechaLlegada] = useState(null);
  const [tipoAvion, setTipoAvion] = useState("");

  const countries = [
    { value: 'CO', label: 'Colombia' },
    { value: 'MX', label: 'México' },
    { value: 'AR', label: 'Argentina' },  
    { value: 'ES', label: 'España' },  
    { value: 'US', label: 'Estados Unidos' }, 
    { value: 'BR', label: 'Brasil' },
    { value: 'FR', label: 'Francia' },
    { value: 'IT', label: 'Italia' },
    { value: 'DE', label: 'Alemania' },
    { value: 'GB', label: 'Reino Unido' },
    { value: 'CA', label: 'Canadá' },
    { value: 'AU', label: 'Australia' },
    { value: 'JP', label: 'Japón' },
    { value: 'IN', label: 'India' },
    { value: 'CN', label: 'China' },
    { value: 'ZA', label: 'Sudáfrica' }, 
    
  ];

  const fetchCities = (countryCode) => {
    if (countryCode === 'CO') {
      return [
        { value: 'Medellin', label: 'Medellín' },
        { value: 'Bogota', label: 'Bogotá' },
        { value: 'Cali', label: 'Cali' },
        { value: 'Barranquilla', label: 'Barranquilla' },
        { value: 'Cartagena', label: 'Cartagena' },
        { value: 'Bucaramanga', label: 'Bucaramanga' },
        { value: 'Pereira', label: 'Pereira' },
        { value: 'Cúcuta', label: 'Cúcuta' },
        { value: 'SantaMarta', label: 'Santa Marta' },
        { value: 'Manizales', label: 'Manizales' },
        { value: 'Ibagué', label: 'Ibagué' },
        { value: 'Tunja', label: 'Tunja' },
        { value: 'Neiva', label: 'Neiva' },
        { value: 'Popayan', label: 'Popayán' },
        { value: 'Villavicencio', label: 'Villavicencio' },
        { value: 'Quibdo', label: 'Quibdó' },
        { value: 'Sincelejo', label: 'Sincelejo' },
        { value: 'Monteria', label: 'Montería' },
        { value: 'Palmira', label: 'Palmira' },
        { value: 'Florencia', label: 'Florencia' },
        { value: 'Arauca', label: 'Arauca' },
        { value: 'Bello', label: 'Bello' },
        { value: 'Soledad', label: 'Soledad' },
        { value: 'Rionegro', label: 'Rionegro' },
        { value: 'Yopal', label: 'Yopal' },
        { value: 'Girardot', label: 'Girardot' },
        { value: 'Tuluá', label: 'Tuluá' },
        { value: 'Chiquinquira', label: 'Chiquinquirá' },
        { value: 'San Andres', label: 'San Andrés' },
        { value: 'Mocoa', label: 'Mocoa' },
      ];
    } else if (countryCode === 'MX') {
      return [
        { value: 'MexicoCity', label: 'Ciudad de México' },
        { value: 'Guadalajara', label: 'Guadalajara' },
        { value: 'Monterrey', label: 'Monterrey' },
        { value: 'Cancun', label: 'Cancún' },
        { value: 'Puebla', label: 'Puebla' },
        { value: 'Tijuana', label: 'Tijuana' },
        { value: 'Mérida', label: 'Mérida' },
        { value: 'Chihuahua', label: 'Chihuahua' },
        { value: 'Oaxaca', label: 'Oaxaca' },
        { value: 'Acapulco', label: 'Acapulco' },
        { value: 'León', label: 'León' },
        { value: 'Querétaro', label: 'Querétaro' },
        { value: 'Hermosillo', label: 'Hermosillo' },
        { value: 'Saltillo', label: 'Saltillo' },
        { value: 'Mazatlán', label: 'Mazatlán' },
        { value: 'Guerrero', label: 'Guerrero' },
        { value: 'Durango', label: 'Durango' },
        { value: 'Morelia', label: 'Morelia' },
        { value: 'Toluca', label: 'Toluca' },
        { value: 'LaPaz', label: 'La Paz' },
        { value: 'Veracruz', label: 'Veracruz' },
        { value: 'Culiacán', label: 'Culiacán' },
        { value: 'Zacatecas', label: 'Zacatecas' },
        { value: 'SanLuisPotosi', label: 'San Luis Potosí' },
        { value: 'Aguascalientes', label: 'Aguascalientes' },
        { value: 'RivieraMaya', label: 'Riviera Maya' },
        { value: 'Tehuacán', label: 'Tehuacán' },
        { value: 'Xalapa', label: 'Xalapa' },
        { value: 'SanCristobal', label: 'San Cristóbal de las Casas' },
        { value: 'TuxtlaGutierrez', label: 'Tuxtla Gutiérrez' },
      ];
    } else if (countryCode === 'AR') {
        return [
            { value: 'BuenosAires', label: 'Buenos Aires' },
            { value: 'Cordoba', label: 'Córdoba' },
            { value: 'Rosario', label: 'Rosario' },
            { value: 'Mendoza', label: 'Mendoza' },
            { value: 'Tucuman', label: 'Tucumán' },
            { value: 'Salta', label: 'Salta' },
            { value: 'SanJuan', label: 'San Juan' },
            { value: 'Neuquen', label: 'Neuquén' },
            { value: 'MarDelPlata', label: 'Mar del Plata' },
            { value: 'SanLuis', label: 'San Luis' },
            { value: 'SantiagoDelEstero', label: 'Santiago del Estero' },
            { value: 'LaPlata', label: 'La Plata' },
            { value: 'Rosario', label: 'Rosario' },
            { value: 'Posadas', label: 'Posadas' },
            { value: 'Jujuy', label: 'Jujuy' },
            { value: 'Chaco', label: 'Chaco' },
            { value: 'SantaFe', label: 'Santa Fe' },
            { value: 'RíoGallegos', label: 'Río Gallegos' },
            { value: 'Formosa', label: 'Formosa' },
            { value: 'LaPampa', label: 'La Pampa' },
            { value: 'Catamarca', label: 'Catamarca' },
            { value: 'Rafaela', label: 'Rafaela' },
            { value: 'VillaMaria', label: 'Villa María' },
            { value: 'SanRafael', label: 'San Rafael' },
            { value: 'Esquel', label: 'Esquel' },
            { value: 'VillaCarlosPaz', label: 'Villa Carlos Paz' },
            { value: 'SanFernandoDelValle', label: 'San Fernando del Valle de Catamarca' },
            { value: 'Concordia', label: 'Concordia' },
            { value: 'Chivilcoy', label: 'Chivilcoy' },
            { value: 'Pilar', label: 'Pilar' },
        ];
    } else if (countryCode === 'ES') {
        return [
            { value: 'Madrid', label: 'Madrid' },
            { value: 'Barcelona', label: 'Barcelona' },
            { value: 'Valencia', label: 'Valencia' },
            { value: 'Sevilla', label: 'Sevilla' },
            { value: 'Zaragoza', label: 'Zaragoza' },
            { value: 'Málaga', label: 'Málaga' },
            { value: 'Murcia', label: 'Murcia' },
            { value: 'Palma', label: 'Palma' },
            { value: 'Bilbao', label: 'Bilbao' },
            { value: 'Alicante', label: 'Alicante' },
            { value: 'Córdoba', label: 'Córdoba' },
            { value: 'Valladolid', label: 'Valladolid' },
            { value: 'Vigo', label: 'Vigo' },
            { value: 'Gijón', label: 'Gijón' },
            { value: 'Granada', label: 'Granada' },
            { value: 'Oviedo', label: 'Oviedo' },
            { value: 'Castellón', label: 'Castellón' },
            { value: 'Toledo', label: 'Toledo' },
            { value: 'Badajoz', label: 'Badajoz' },
            { value: 'SanSebastian', label: 'San Sebastián' },
            { value: 'Logroño', label: 'Logroño' },
            { value: 'León', label: 'León' },
            { value: 'Albacete', label: 'Albacete' },
            { value: 'Segovia', label: 'Segovia' },
            { value: 'Cáceres', label: 'Cáceres' },
            { value: 'Almería', label: 'Almería' },
            { value: 'Girona', label: 'Girona' },
            { value: 'Reus', label: 'Reus' },
            { value: 'Cuenca', label: 'Cuenca' },
            { value: 'Huelva', label: 'Huelva' },
        ];
    } else if (countryCode === 'US') {
        return [
            { value: 'NewYork', label: 'New York' },
            { value: 'LosAngeles', label: 'Los Angeles' },
            { value: 'Chicago', label: 'Chicago' },
            { value: 'Houston', label: 'Houston' },
            { value: 'Phoenix', label: 'Phoenix' },
            { value: 'Philadelphia', label: 'Philadelphia' },
            { value: 'SanAntonio', label: 'San Antonio' },
            { value: 'SanDiego', label: 'San Diego' },
            { value: 'Dallas', label: 'Dallas' },
            { value: 'SanJose', label: 'San Jose' },
            { value: 'Austin', label: 'Austin' },
            { value: 'Jacksonville', label: 'Jacksonville' },
            { value: 'FortWorth', label: 'Fort Worth' },
            { value: 'Columbus', label: 'Columbus' },
            { value: 'Indianapolis', label: 'Indianapolis' },
            { value: 'Charlotte', label: 'Charlotte' },
            { value: 'SanFrancisco', label: 'San Francisco' },
            { value: 'Seattle', label: 'Seattle' },
            { value: 'Denver', label: 'Denver' },
            { value: 'Washington', label: 'Washington, D.C.' },
            { value: 'Boston', label: 'Boston' },
            { value: 'ElPaso', label: 'El Paso' },
            { value: 'Detroit', label: 'Detroit' },
            { value: 'Nashville', label: 'Nashville' },
            { value: 'Portland', label: 'Portland' },
            { value: 'Memphis', label: 'Memphis' },
            { value: 'OklahomaCity', label: 'Oklahoma City' },
            { value: 'LasVegas', label: 'Las Vegas' },
            { value: 'Louisville', label: 'Louisville' },
            { value: 'Baltimore', label: 'Baltimore' },
        ];
    } else if (countryCode === 'BR') {
        return [
            { value: 'SaoPaulo', label: 'São Paulo' },
            { value: 'RioDeJaneiro', label: 'Rio de Janeiro' },
            { value: 'Salvador', label: 'Salvador' },
            { value: 'Brasilia', label: 'Brasília' },
            { value: 'Fortaleza', label: 'Fortaleza' },
            { value: 'BeloHorizonte', label: 'Belo Horizonte' },
            { value: 'Curitiba', label: 'Curitiba' },
            { value: 'Manaus', label: 'Manaus' },
            { value: 'Recife', label: 'Recife' },
            { value: 'PortoAlegre', label: 'Porto Alegre' },
            { value: 'Campinas', label: 'Campinas' },
            { value: 'SãoBernardoDoCampo', label: 'São Bernardo do Campo' },
            { value: 'SantoAndre', label: 'Santo André' },
            { value: 'Goiania', label: 'Goiânia' },
            { value: 'Maceio', label: 'Maceió' },
            { value: 'Natal', label: 'Natal' },
            { value: 'Teresina', label: 'Teresina' },
            { value: 'SaoLuis', label: 'São Luís' },
            { value: 'Cuiaba', label: 'Cuiabá' },
            { value: 'Aracaju', label: 'Aracaju' },
            { value: 'Vitoria', label: 'Vitória' },
            { value: 'RioBranco', label: 'Rio Branco' },
            { value: 'Belem', label: 'Belém' },
            { value: 'PortoVelho', label: 'Porto Velho' },
            { value: 'JoaoPessoa', label: 'João Pessoa' },
            { value: 'Uberlandia', label: 'Uberlândia' },
            { value: 'RibeiraoPreto', label: 'Ribeirão Preto' },
            { value: 'Jundiai', label: 'Jundiaí' },
            { value: 'Piracicaba', label: 'Piracicaba' },
            { value: 'Blumenau', label: 'Blumenau' },
        ];
    } else if (countryCode === 'FR') {
        return [
            { value: 'Paris', label: 'Paris' },
            { value: 'Marseille', label: 'Marseille' },
            { value: 'Lyon', label: 'Lyon' },
            { value: 'Toulouse', label: 'Toulouse' },
            { value: 'Nice', label: 'Nice' },
            { value: 'Nantes', label: 'Nantes' },
            { value: 'Strasbourg', label: 'Strasbourg' },
            { value: 'Montpellier', label: 'Montpellier' },
            { value: 'Bordeaux', label: 'Bordeaux' },
            { value: 'Lille', label: 'Lille' },
            { value: 'Rennes', label: 'Rennes' },
            { value: 'Reims', label: 'Reims' },
            { value: 'LeHavre', label: 'Le Havre' },
            { value: 'SaintEtienne', label: 'Saint-Étienne' },
            { value: 'Toulon', label: 'Toulon' },
            { value: 'Angers', label: 'Angers' },
            { value: 'LeMans', label: 'Le Mans' },
            { value: 'AixEnProvence', label: 'Aix-en-Provence' },
            { value: 'Nimes', label: 'Nîmes' },
            { value: 'Valence', label: 'Valence' },
            { value: 'Amiens', label: 'Amiens' },
            { value: 'Dijon', label: 'Dijon' },
            { value: 'Cherbourg', label: 'Cherbourg' },
            { value: 'Limoges', label: 'Limoges' },
            { value: 'ClermontFerrand', label: 'Clermont-Ferrand' },
            { value: 'Cannes', label: 'Cannes' },
            { value: 'Metz', label: 'Metz' },
            { value: 'Rouen', label: 'Rouen' },
            { value: 'Tours', label: 'Tours' },
            { value: 'Brest', label: 'Brest' },
        ];
    } else if (countryCode === 'IT') {
        return [
            { value: 'Rome', label: 'Roma' },
            { value: 'Milan', label: 'Milano' },
            { value: 'Naples', label: 'Napoli' },
            { value: 'Turin', label: 'Torino' },
            { value: 'Palermo', label: 'Palermo' },
            { value: 'Genoa', label: 'Genova' },
            { value: 'Bologna', label: 'Bologna' },
            { value: 'Florence', label: 'Firenze' },
            { value: 'Venice', label: 'Venezia' },
            { value: 'Verona', label: 'Verona' },
            { value: 'Padua', label: 'Padova' },
            { value: 'Catania', label: 'Catania' },
            { value: 'Bari', label: 'Bari' },
            { value: 'Messina', label: 'Messina' },
            { value: 'Taranto', label: 'Taranto' },
            { value: 'Trieste', label: 'Trieste' },
            { value: 'Brescia', label: 'Brescia' },
            { value: 'Prato', label: 'Prato' },
            { value: 'ReggioCalabria', label: 'Reggio Calabria' },
            { value: 'Rimini', label: 'Rimini' },
            { value: 'LaSpezia', label: 'La Spezia' },
            { value: 'Modena', label: 'Modena' },
            { value: 'Lecce', label: 'Lecce' },
            { value: 'Ancona', label: 'Ancona' },
            { value: 'Pescara', label: 'Pescara' },
            { value: 'Sassari', label: 'Sassari' },
            { value: 'Cagliari', label: 'Cagliari' },
            { value: 'Novara', label: 'Novara' },
            { value: 'Terni', label: 'Terni' },
            { value: 'Cremona', label: 'Cremona' },
        ];
    } else if (countryCode === 'DE') {
        return [
            { value: 'Berlin', label: 'Berlín' },
            { value: 'Hamburg', label: 'Hamburgo' },
            { value: 'Munich', label: 'Múnich' },
            { value: 'Cologne', label: 'Colonia' },
            { value: 'Frankfurt', label: 'Fráncfort' },
            { value: 'Stuttgart', label: 'Stuttgart' },
            { value: 'Dusseldorf', label: 'Düsseldorf' },
            { value: 'Dortmund', label: 'Dortmund' },
            { value: 'Essen', label: 'Essen' },
            { value: 'Leipzig', label: 'Leipzig' },
            { value: 'Bremen', label: 'Bremen' },
            { value: 'Dresden', label: 'Dresde' },
            { value: 'Hanover', label: 'Hanóver' },
            { value: 'Nuremberg', label: 'Núremberg' },
            { value: 'Lubeck', label: 'Lübeck' },
            { value: 'Mannheim', label: 'Mannheim' },
            { value: 'Augsburg', label: 'Augsburgo' },
            { value: 'Bielefeld', label: 'Bielefeld' },
            { value: 'Freiburg', label: 'Friburgo' },
            { value: 'Karlsruhe', label: 'Karlsruhe' },
            { value: 'Wurzburg', label: 'Würzburg' },
            { value: 'Rostock', label: 'Rostock' },
            { value: 'Potsdam', label: 'Potsdam' },
            { value: 'Wuppertal', label: 'Wuppertal' },
            { value: 'Kiel', label: 'Kiel' },
            { value: 'Regensburg', label: 'Ratisbona' },
            { value: 'Chemnitz', label: 'Chemnitz' },
            { value: 'Gelsenkirchen', label: 'Gelsenkirchen' },
            { value: 'Zwickau', label: 'Zwickau' },
            { value: 'Bottrop', label: 'Bottrop' },
        ];
    } else if (countryCode === 'GB') {
        return [
            { value: 'London', label: 'London' },
            { value: 'Birmingham', label: 'Birmingham' },
            { value: 'Manchester', label: 'Manchester' },
            { value: 'Liverpool', label: 'Liverpool' },
            { value: 'Leeds', label: 'Leeds' },
            { value: 'Sheffield', label: 'Sheffield' },
            { value: 'Bristol', label: 'Bristol' },
            { value: 'Glasgow', label: 'Glasgow' },
            { value: 'Newcastle', label: 'Newcastle' },
            { value: 'Nottingham', label: 'Nottingham' },
            { value: 'Cardiff', label: 'Cardiff' },
            { value: 'Edinburgh', label: 'Edinburgh' },
            { value: 'Belfast', label: 'Belfast' },
            { value: 'Leicester', label: 'Leicester' },
            { value: 'Coventry', label: 'Coventry' },
            { value: 'Hull', label: 'Hull' },
            { value: 'StokeonTrent', label: 'Stoke-on-Trent' },
            { value: 'Wolverhampton', label: 'Wolverhampton' },
            { value: 'Bradford', label: 'Bradford' },
            { value: 'Oxford', label: 'Oxford' },
            { value: 'Cambridge', label: 'Cambridge' },
            { value: 'York', label: 'York' },
            { value: 'Swindon', label: 'Swindon' },
            { value: 'Middlesbrough', label: 'Middlesbrough' },
            { value: 'Blackpool', label: 'Blackpool' },
            { value: 'Wigan', label: 'Wigan' },
            { value: 'Ipswich', label: 'Ipswich' },
            { value: 'Norwich', label: 'Norwich' },
            { value: 'Sunderland', label: 'Sunderland' },
            { value: 'Slough', label: 'Slough' },
        ];
    } else if (countryCode === 'CA') {
        return [
            { value: 'Toronto', label: 'Toronto' },
            { value: 'Vancouver', label: 'Vancouver' },
            { value: 'Montreal', label: 'Montreal' },
            { value: 'Ottawa', label: 'Ottawa' },
            { value: 'Calgary', label: 'Calgary' },
            { value: 'Edmonton', label: 'Edmonton' },
            { value: 'Winnipeg', label: 'Winnipeg' },
            { value: 'Quebec', label: 'Quebec' },
            { value: 'Hamilton', label: 'Hamilton' },
            { value: 'Kitchener', label: 'Kitchener' },
            { value: 'London', label: 'London' },
            { value: 'StJohns', label: 'St. Johns' },
            { value: 'Surrey', label: 'Surrey' },
            { value: 'Burnaby', label: 'Burnaby' },
            { value: 'Richmond', label: 'Richmond' },
            { value: 'Markham', label: 'Markham' },
            { value: 'Vaughan', label: 'Vaughan' },
            { value: 'Mississauga', label: 'Mississauga' },
            { value: 'Brampton', label: 'Brampton' },
            { value: 'Oakville', label: 'Oakville' },
            { value: 'Saskatoon', label: 'Saskatoon' },
            { value: 'Regina', label: 'Regina' },
            { value: 'Sherbrooke', label: 'Sherbrooke' },
            { value: 'Chicoutimi', label: 'Chicoutimi' },
            { value: 'Gatineau', label: 'Gatineau' },
            { value: 'Kelowna', label: 'Kelowna' },
            { value: 'Langley', label: 'Langley' },
            { value: 'SaintJeanSurRichelieu', label: 'Saint-Jean-sur-Richelieu' },
            { value: 'ThunderBay', label: 'Thunder Bay' },
            { value: 'Cornwall', label: 'Cornwall' },
        ];
    } else if (countryCode === 'AU') {
        return [
            { value: 'Sydney', label: 'Sydney' },
            { value: 'Melbourne', label: 'Melbourne' },
            { value: 'Brisbane', label: 'Brisbane' },
            { value: 'Perth', label: 'Perth' },
            { value: 'Adelaide', label: 'Adelaide' },
            { value: 'GoldCoast', label: 'Gold Coast' },
            { value: 'Canberra', label: 'Canberra' },
            { value: 'Newcastle', label: 'Newcastle' },
            { value: 'Wollongong', label: 'Wollongong' },
            { value: 'Geelong', label: 'Geelong' },
            { value: 'Hobart', label: 'Hobart' },
            { value: 'Launceston', label: 'Launceston' },
            { value: 'Cairns', label: 'Cairns' },
            { value: 'Townsville', label: 'Townsville' },
            { value: 'Ballarat', label: 'Ballarat' },
            { value: 'Bendigo', label: 'Bendigo' },
            { value: 'Albury', label: 'Albury' },
            { value: 'Mackay', label: 'Mackay' },
            { value: 'Rockhampton', label: 'Rockhampton' },
            { value: 'Bundaberg', label: 'Bundaberg' },
            { value: 'Launceston', label: 'Launceston' },
            { value: 'Toowoomba', label: 'Toowoomba' },
            { value: 'Shepparton', label: 'Shepparton' },
            { value: 'SunshineCoast', label: 'Sunshine Coast' },
            { value: 'Orange', label: 'Orange' },
            { value: 'Mudgee', label: 'Mudgee' },
            { value: 'PortMacquarie', label: 'Port Macquarie' },
            { value: 'Tamworth', label: 'Tamworth' },
            { value: 'Bunbury', label: 'Bunbury' },
            { value: 'Kalgoorlie', label: 'Kalgoorlie' },
        ];
    } else if (countryCode === 'JP') {
        return [
            { value: 'Tokyo', label: 'Tokyo' },
            { value: 'Osaka', label: 'Osaka' },
            { value: 'Kyoto', label: 'Kyoto' },
            { value: 'Yokohama', label: 'Yokohama' },
            { value: 'Sapporo', label: 'Sapporo' },
            { value: 'Fukuoka', label: 'Fukuoka' },
            { value: 'Kobe', label: 'Kobe' },
            { value: 'Nagoya', label: 'Nagoya' },
            { value: 'Hiroshima', label: 'Hiroshima' },
            { value: 'Sendai', label: 'Sendai' },
            { value: 'Chiba', label: 'Chiba' },
            { value: 'Saitama', label: 'Saitama' },
            { value: 'Kawasaki', label: 'Kawasaki' },
            { value: 'Kagoshima', label: 'Kagoshima' },
            { value: 'Niigata', label: 'Niigata' },
            { value: 'Shizuoka', label: 'Shizuoka' },
            { value: 'Okinawa', label: 'Okinawa' },
            { value: 'Mito', label: 'Mito' },
            { value: 'Utsunomiya', label: 'Utsunomiya' },
            { value: 'Kochi', label: 'Kochi' },
            { value: 'Toyama', label: 'Toyama' },
            { value: 'Gifu', label: 'Gifu' },
            { value: 'Shimonoseki', label: 'Shimonoseki' },
            { value: 'Urawa', label: 'Urawa' },
            { value: 'Fukuyama', label: 'Fukuyama' },
            { value: 'Oita', label: 'Oita' },
            { value: 'Chuo', label: 'Chuo' },
            { value: 'Akita', label: 'Akita' },
            { value: 'Himeji', label: 'Himeji' },
            { value: 'Takamatsu', label: 'Takamatsu' },
        ];
    } else if (countryCode === 'IN') {
        return [
            { value: 'NewDelhi', label: 'New Delhi' },
            { value: 'Mumbai', label: 'Mumbai' },
            { value: 'Bangalore', label: 'Bangalore' },
            { value: 'Hyderabad', label: 'Hyderabad' },
            { value: 'Chennai', label: 'Chennai' },
            { value: 'Kolkata', label: 'Kolkata' },
            { value: 'Pune', label: 'Pune' },
            { value: 'Ahmedabad', label: 'Ahmedabad' },
            { value: 'Jaipur', label: 'Jaipur' },
            { value: 'Surat', label: 'Surat' },
            { value: 'Lucknow', label: 'Lucknow' },
            { value: 'Kanpur', label: 'Kanpur' },
            { value: 'Nagpur', label: 'Nagpur' },
            { value: 'Indore', label: 'Indore' },
            { value: 'Patna', label: 'Patna' },
            { value: 'Vadodara', label: 'Vadodara' },
            { value: 'Bhopal', label: 'Bhopal' },
            { value: 'Visakhapatnam', label: 'Visakhapatnam' },
            { value: 'Chandigarh', label: 'Chandigarh' },
            { value: 'Coimbatore', label: 'Coimbatore' },
            { value: 'Rajkot', label: 'Rajkot' },
            { value: 'Meerut', label: 'Meerut' },
            { value: 'Kochi', label: 'Kochi' },
            { value: 'Agra', label: 'Agra' },
            { value: 'Kolkata', label: 'Kolkata' },
            { value: 'Nagpur', label: 'Nagpur' },
            { value: 'Vijayawada', label: 'Vijayawada' },
            { value: 'Nashik', label: 'Nashik' },
            { value: 'Faridabad', label: 'Faridabad' },
            { value: 'Dhanbad', label: 'Dhanbad' },
        ];
    } else if (countryCode === 'CN') {
        return [
            { value: 'Beijing', label: 'Beijing' },
            { value: 'Shanghai', label: 'Shanghai' },
            { value: 'Guangzhou', label: 'Guangzhou' },
            { value: 'Shenzhen', label: 'Shenzhen' },
            { value: 'Chengdu', label: 'Chengdu' },
            { value: 'Xian', label: 'Xian' },
            { value: 'Hangzhou', label: 'Hangzhou' },
            { value: 'Wuhan', label: 'Wuhan' },
            { value: 'Tianjin', label: 'Tianjin' },
            { value: 'Chongqing', label: 'Chongqing' },
            { value: 'Suzhou', label: 'Suzhou' },
            { value: 'Shijiazhuang', label: 'Shijiazhuang' },
            { value: 'Dongguan', label: 'Dongguan' },
            { value: 'Harbin', label: 'Harbin' },
            { value: 'Nanjing', label: 'Nanjing' },
            { value: 'Zhengzhou', label: 'Zhengzhou' },
            { value: 'Dalian', label: 'Dalian' },
            { value: 'Qingdao', label: 'Qingdao' },
            { value: 'Foshan', label: 'Foshan' },
            { value: 'Shenyang', label: 'Shenyang' },
            { value: 'Jinan', label: 'Jinan' },
            { value: 'Changsha', label: 'Changsha' },
            { value: 'Xiamen', label: 'Xiamen' },
            { value: 'Zhuhai', label: 'Zhuhai' },
            { value: 'Ningbo', label: 'Ningbo' },
            { value: 'Changchun', label: 'Changchun' },
            { value: 'Lanzhou', label: 'Lanzhou' },
            { value: 'Guiyang', label: 'Guiyang' },
            { value: 'Hefei', label: 'Hefei' },
            { value: 'Lianyungang', label: 'Lianyungang' },
        ];
    } else if (countryCode === 'ZA') {
        return [
            { value: 'Johannesburg', label: 'Johannesburgo' },
            { value: 'CapeTown', label: 'Ciudad del Cabo' },
            { value: 'Durban', label: 'Durban' },
            { value: 'Pretoria', label: 'Pretoria' },
            { value: 'PortElizabeth', label: 'Puerto Elizabeth' },
            { value: 'Bloemfontein', label: 'Bloemfontein' },
            { value: 'Polokwane', label: 'Polokwane' },
            { value: 'Nelspruit', label: 'Nelspruit' },
            { value: 'Kimberley', label: 'Kimberley' },
            { value: 'Pietermaritzburg', label: 'Pietermaritzburg' },
            { value: 'George', label: 'George' },
            { value: 'Vanderbijlpark', label: 'Vanderbijlpark' },
            { value: 'Germiston', label: 'Germiston' },
            { value: 'Witbank', label: 'Witbank' },
            { value: 'Uitenhage', label: 'Uitenhage' },
            { value: 'Mthatha', label: 'Mthatha' },
            { value: 'Secunda', label: 'Secunda' },
            { value: 'Saldanha', label: 'Saldanha' },
            { value: 'Knysna', label: 'Knysna' },
            { value: 'Laingsburg', label: 'Laingsburg' },
            { value: 'Brits', label: 'Brits' },
            { value: 'EastLondon', label: 'East London' },
            { value: 'Klerksdorp', label: 'Klerksdorp' },
            { value: 'Lephalale', label: 'Lephalale' },
            { value: 'Middelburg', label: 'Middelburg' },
            { value: 'Vereeniging', label: 'Vereeniging' },
            { value: 'Ladysmith', label: 'Ladysmith' },
            { value: 'Bellville', label: 'Bellville' },
            { value: 'Centurion', label: 'Centurion' },
            { value: 'RichardsBay', label: 'Richards Bay'},
        ];
    }
    return [];
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null); // Resetea la ciudad al cambiar el país
  };

  const handleAccept = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <button className="menu-button">☰</button>
        <div className="logo-container">
          <img src="/img/logo.png" alt="Logo" className="logo" />
          <h1 className="title">Singapur</h1>
        </div>
        <img src="/img/profile.png" alt="Profile" className="profile-icon" />
      </header>
      <div style={styles.container}>
      <h2 style={styles.title}>Agendar vuelo directo</h2>
      <p style={styles.description}>Registre los siguientes datos para agendar vuelos directos</p>

      <div style={styles.formGroup}>
        <label>Número de vuelo</label>
        <input
          type="text"
          placeholder="Ingresa el número de vuelo"
          value={numeroVuelo}
          onChange={(e) => setNumeroVuelo(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: 300)</p>
      </div>

      <div style={styles.formGroup}>
        <label>Ciudad de origen</label>
        <input
          type="text"
          placeholder="Ingresa la ciudad de origen"
          value={ciudadOrigen}
          onChange={(e) => setCiudadOrigen(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: Medellín)</p>
      </div>

      <div style={styles.formGroup}>
        <label>Fecha y hora de salida*</label>
        <DatePicker
          selected={fechaSalida}
          onChange={(date) => setFechaSalida(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Selecciona fecha y hora de salida"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Tipo de vuelo</label>
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.typeButton,
              backgroundColor: tipoVuelo === "Nacional" ? '#333' : '#ccc',
              color: tipoVuelo === "Nacional" ? '#fff' : '#000'
            }}
            onClick={() => setTipoVuelo("Nacional")}
          >
            Nacional
          </button>
          <button
            style={{
              ...styles.typeButton,
              backgroundColor: tipoVuelo === "Internacional" ? '#333' : '#ccc',
              color: tipoVuelo === "Internacional" ? '#fff' : '#000'
            }}
            onClick={() => setTipoVuelo("Internacional")}
          >
            Internacional
          </button>
        </div>
      </div>

      <div style={styles.formGroup}>
        <label>País</label>
        <Select
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Selecciona un país"
        />
      </div>

      <div style={styles.formGroup}>
        <label>Ciudad de destino</label>
        <Select
          options={fetchCities(selectedCountry?.value)}
          value={selectedCity}
          onChange={(option) => setSelectedCity(option)}
          placeholder="Selecciona una ciudad"
          isDisabled={!selectedCountry}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Fecha y hora de llegada</label>
        <DatePicker
          selected={fechaLlegada}
          onChange={(date) => setFechaLlegada(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Selecciona fecha y hora de llegada"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Tipo de avión</label>
        <input
          type="text"
          placeholder="Ingresa el tipo de avión"
          value={tipoAvion}
          onChange={(e) => setTipoAvion(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: Boeing 737, Airbus A320)</p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.cancel }} onClick={() => alert("Formulario limpiado")}>Cancelar</button>
        <button style={{ ...styles.button, ...styles.accept }} onClick={handleAccept}>Aceptar</button>
      </div>

      {showModal && (
  <div style={styles.modalOverlay}>
    <div style={styles.modal}>
      <h3>Visualización de datos a agendar</h3>
      <p>¿Desea agendar el vuelo directo con los siguientes datos?</p>
      <div style={styles.formGroup}><strong>Número de vuelo:</strong> {numeroVuelo}</div>
      <div style={styles.formGroup}><strong>Ciudad de origen:</strong> {ciudadOrigen}</div>
      <div style={styles.formGroup}><strong>Fecha y hora de salida:</strong> {fechaSalida?.toLocaleString()}</div>
      <div style={styles.formGroup}><strong>Tipo de vuelo:</strong> {tipoVuelo}</div>
      <div style={styles.formGroup}><strong>País:</strong> {selectedCountry?.label}</div>
      <div style={styles.formGroup}><strong>Ciudad de destino:</strong> {selectedCity?.label}</div>
      <div style={styles.formGroup}><strong>Fecha y hora de llegada:</strong> {fechaLlegada?.toLocaleString()}</div>
      <div style={styles.formGroup}><strong>Tipo de avión:</strong> {tipoAvion}</div>

      <div style={styles.modalButtonGroup}>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonModify }}>Modificar</button>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonConfirm }}>Confirmar</button>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonDelete }}>Eliminar</button>
      </div>
    </div>
  </div>
)}
    </div>
    </div>
  );
};

// Estilos en línea
const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '20px',
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      textAlign: 'center',
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    input: {
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    exampleText: {
      fontSize: '0.85rem',
      color: '#999',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontWeight: 'bold',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    cancel: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    accept: {
      backgroundColor: '#333',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
    },
    typeButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#ccc',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  
    // Estilos para la ventana emergente (modal)
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10',
    },
    modal: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    modalDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1rem',
    },
    modalFormGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    modalInput: {
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f5f5f5',
      color: '#333',
    },
    modalButtonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      },
    modalButton: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        margin: '0 10px',
        width: '30%',
        transition: 'background-color 0.2s ease',
    },
    modalButtonModify: {
      backgroundColor: '#ccc',
      color: '#fff',
    },
    modalButtonConfirm: {
      backgroundColor: '#333',
      color: '#fff',
    },
    modalButtonDelete: {
      backgroundColor: '#ccc',
      color: '#fff',
    },
  };  

export default AgendarVueloDirecto;
