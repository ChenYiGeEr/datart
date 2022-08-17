/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Timezones are borrowed from Google Calendar */

// eslint-disable-next-line max-len
// [...$0.children].map(el => ({ label: (el.getAttribute('aria-label')|| '').replace(/\(.*?\)(.+)/, '$1').trim(), name: el.getAttribute('data-value'),  value: +(el.getAttribute('aria-label')|| '').replace(/\(.*?(-?[0-9]{2}):([0-9]{2})\).*/, (all, one, two) => +one + (two / 60) * (one > 0 ? 1 : -1)) }))
export const timezoneList = [
  { label: 'Midway', name: 'Pacific/Midway', value: -11 },
  { label: 'Niue', name: 'Pacific/Niue', value: -11 },
  { label: 'Pago Pago', name: 'Pacific/Pago_Pago', value: -11 },
  { label: 'Samoa', name: 'Pacific/Samoa', value: -11 },
  { label: 'Hawaii Time', name: 'Pacific/Honolulu', value: -10 },
  { label: 'Johnston', name: 'Pacific/Johnston', value: -10 },
  { label: 'Rarotonga', name: 'Pacific/Rarotonga', value: -10 },
  { label: 'Tahiti', name: 'Pacific/Tahiti', value: -10 },
  { label: 'Marquesas', name: 'Pacific/Marquesas', value: -9.5 },
  { label: 'Atka', name: 'America/Atka', value: -9 },
  { label: 'Gambier', name: 'Pacific/Gambier', value: -9 },
  { label: 'Alaska Time', name: 'America/Anchorage', value: -8 },
  { label: 'Juneau', name: 'America/Juneau', value: -8 },
  { label: 'Nome', name: 'America/Nome', value: -8 },
  { label: 'Yakutat', name: 'America/Yakutat', value: -8 },
  { label: 'Pitcairn', name: 'Pacific/Pitcairn', value: -8 },
  { label: 'Dawson', name: 'America/Dawson', value: -8 },
  { label: 'Mountain Time - Arizona', name: 'America/Phoenix', value: -7 },
  {
    label: 'Mountain Time - Dawson Creek',
    name: 'America/Dawson_Creek',
    value: -7,
  },
  {
    label: 'Mountain Time - Hermosillo',
    name: 'America/Hermosillo',
    value: -7,
  },
  { label: 'Pacific Time', name: 'America/Los_Angeles', value: -7 },
  { label: 'Pacific Time - Tijuana', name: 'America/Tijuana', value: -7 },
  { label: 'Pacific Time - Vancouver', name: 'America/Vancouver', value: -7 },
  {
    label: 'Pacific Time - Whitehorse',
    name: 'America/Whitehorse',
    value: -7,
  },
  { label: 'Belize', name: 'America/Belize', value: -6 },
  { label: 'Boise', name: 'America/Boise', value: -6 },
  { label: 'Central Time - Regina', name: 'America/Regina', value: -6 },
  {
    label: 'Central Time - Tegucigalpa',
    name: 'America/Tegucigalpa',
    value: -6,
  },
  { label: 'Costa Rica', name: 'America/Costa_Rica', value: -6 },
  { label: 'Easter Island', name: 'Pacific/Easter', value: -6 },
  { label: 'El Salvador', name: 'America/El_Salvador', value: -6 },
  { label: 'Galapagos', name: 'Pacific/Galapagos', value: -6 },
  { label: 'Guatemala', name: 'America/Guatemala', value: -6 },
  { label: 'Managua', name: 'America/Managua', value: -6 },
  { label: 'Mountain Time', name: 'America/Denver', value: -6 },
  {
    label: 'Mountain Time - Chihuahua, Mazatlan',
    name: 'America/Mazatlan',
    value: -6,
  },
  { label: 'Mountain Time - Edmonton', name: 'America/Edmonton', value: -6 },
  {
    label: 'Mountain Time - Yellowknife',
    name: 'America/Yellowknife',
    value: -6,
  },
  { label: 'America Cancun', name: 'America/Cancun', value: -5 },
  { label: 'Bogota', name: 'America/Bogota', value: -5 },
  { label: 'Central Time', name: 'America/Chicago', value: -5 },
  {
    label: 'Central Time - Mexico City',
    name: 'America/Mexico_City',
    value: -5,
  },
  { label: 'Central Time - Winnipeg', name: 'America/Winnipeg', value: -5 },
  { label: 'Guayaquil', name: 'America/Guayaquil', value: -5 },
  { label: 'Jamaica', name: 'America/Jamaica', value: -5 },
  { label: 'Lima', name: 'America/Lima', value: -5 },
  { label: 'Panama', name: 'America/Panama', value: -5 },
  { label: 'Rio Branco', name: 'America/Rio_Branco', value: -5 },
  { label: 'Asuncion', name: 'America/Asuncion', value: -4 },
  { label: 'Barbados', name: 'America/Barbados', value: -4 },
  { label: 'Boa Vista', name: 'America/Boa_Vista', value: -4 },
  { label: 'Campo Grande', name: 'America/Campo_Grande', value: -4 },
  { label: 'Caracas', name: 'America/Caracas', value: -4 },
  { label: 'Cuiaba', name: 'America/Cuiaba', value: -4 },
  { label: 'Curacao', name: 'America/Curacao', value: -4 },
  { label: 'Detroit', name: 'America/Detroit', value: -4 },
  { label: 'Eastern Time', name: 'America/New_York', value: -4 },
  { label: 'Eastern Time - Iqaluit', name: 'America/Iqaluit', value: -4 },
  { label: 'Eastern Time - Toronto', name: 'America/Toronto', value: -4 },
  { label: 'Grand Turk', name: 'America/Grand_Turk', value: -4 },
  { label: 'Guyana', name: 'America/Guyana', value: -4 },
  { label: 'Havana', name: 'America/Havana', value: -4 },
  { label: 'La Paz', name: 'America/La_Paz', value: -4 },
  { label: 'Manaus', name: 'America/Manaus', value: -4 },
  { label: 'Martinique', name: 'America/Martinique', value: -4 },
  { label: 'Nassau', name: 'America/Nassau', value: -4 },
  { label: 'Port of Spain', name: 'America/Port_of_Spain', value: -4 },
  { label: 'Port-au-Prince', name: 'America/Port-au-Prince', value: -4 },
  { label: 'Porto Velho', name: 'America/Porto_Velho', value: -4 },
  { label: 'Puerto Rico', name: 'America/Puerto_Rico', value: -4 },
  { label: 'Santiago', name: 'America/Santiago', value: -4 },
  { label: 'Santo Domingo', name: 'America/Santo_Domingo', value: -4 },
  { label: 'Araguaina', name: 'America/Araguaina', value: -3 },
  { label: 'Atlantic Time - Halifax', name: 'America/Halifax', value: -3 },
  { label: 'Belem', name: 'America/Belem', value: -3 },
  { label: 'Bermuda', name: 'Atlantic/Bermuda', value: -3 },
  { label: 'Buenos Aires', name: 'America/Argentina/Buenos_Aires', value: -3 },
  { label: 'Cayenne', name: 'America/Cayenne', value: -3 },
  { label: 'Cordoba', name: 'America/Argentina/Cordoba', value: -3 },
  { label: 'Fortaleza', name: 'America/Fortaleza', value: -3 },
  { label: 'Maceio', name: 'America/Maceio', value: -3 },
  { label: 'Montevideo', name: 'America/Montevideo', value: -3 },
  { label: 'Palmer', name: 'Antarctica/Palmer', value: -3 },
  { label: 'Paramaribo', name: 'America/Paramaribo', value: -3 },
  { label: 'Punta Arenas', name: 'America/Punta_Arenas', value: -3 },
  { label: 'Recife', name: 'America/Recife', value: -3 },
  { label: 'Rothera', name: 'Antarctica/Rothera', value: -3 },
  { label: 'Salvador', name: 'America/Bahia', value: -3 },
  { label: 'Sao Paulo', name: 'America/Sao_Paulo', value: -3 },
  { label: 'Stanley', name: 'Atlantic/Stanley', value: -3 },
  { label: 'Thule', name: 'America/Thule', value: -3 },
  {
    label: 'Newfoundland Time - St. Johns',
    name: 'America/St_Johns',
    value: -2.5,
  },
  { label: 'Godthab', name: 'America/Godthab', value: -2 },
  { label: 'Miquelon', name: 'America/Miquelon', value: -2 },
  { label: 'Noronha', name: 'America/Noronha', value: -2 },
  { label: 'South Georgia', name: 'Atlantic/South_Georgia', value: -2 },
  { label: 'Cape Verde', name: 'Atlantic/Cape_Verde', value: -1 },
  { label: 'Abidjan', name: 'Africa/Abidjan', value: 0 },
  { label: 'Accra', name: 'Africa/Accra', value: 0 },
  { label: 'Azores', name: 'Atlantic/Azores', value: 0 },
  { label: 'Bissau', name: 'Africa/Bissau', value: 0 },
  { label: 'Casablanca', name: 'Africa/Casablanca', value: 0 },
  { label: 'Danmarkshavn', name: 'America/Danmarkshavn', value: 0 },
  { label: 'El Aaiun', name: 'Africa/El_Aaiun', value: 0 },
  { label: 'GMT (no daylight saving)', name: 'Etc/GMT', value: 0 },
  { label: 'Monrovia', name: 'Africa/Monrovia', value: 0 },
  { label: 'Reykjavik', name: 'Atlantic/Reykjavik', value: 0 },
  { label: 'Scoresbysund', name: 'America/Scoresbysund', value: 0 },
  { label: 'UTC', name: 'UTC', value: 0 },
  { label: 'Algiers', name: 'Africa/Algiers', value: 1 },
  { label: 'Canary Islands', name: 'Atlantic/Canary', value: 1 },
  { label: 'Dublin', name: 'Europe/Dublin', value: 1 },
  { label: 'Faeroe', name: 'Atlantic/Faroe', value: 1 },
  { label: 'Lagos', name: 'Africa/Lagos', value: 1 },
  { label: 'Lisbon', name: 'Europe/Lisbon', value: 1 },
  { label: 'London', name: 'Europe/London', value: 1 },
  { label: 'Ndjamena', name: 'Africa/Ndjamena', value: 1 },
  { label: 'Sao Tome', name: 'Africa/Sao_Tome', value: 1 },
  { label: 'Tunis', name: 'Africa/Tunis', value: 1 },
  { label: 'Amsterdam', name: 'Europe/Amsterdam', value: 2 },
  { label: 'Andorra', name: 'Europe/Andorra', value: 2 },
  { label: 'Berlin', name: 'Europe/Berlin', value: 2 },
  { label: 'Brussels', name: 'Europe/Brussels', value: 2 },
  { label: 'Budapest', name: 'Europe/Budapest', value: 2 },
  { label: 'Cairo', name: 'Africa/Cairo', value: 2 },
  {
    label: 'Central European Time - Belgrade',
    name: 'Europe/Belgrade',
    value: 2,
  },
  { label: 'Central European Time - Prague', name: 'Europe/Prague', value: 2 },
  { label: 'Ceuta', name: 'Africa/Ceuta', value: 2 },
  { label: 'Copenhagen', name: 'Europe/Copenhagen', value: 2 },
  { label: 'Gibraltar', name: 'Europe/Gibraltar', value: 2 },
  { label: 'Johannesburg', name: 'Africa/Johannesburg', value: 2 },
  { label: 'Khartoum', name: 'Africa/Khartoum', value: 2 },
  { label: 'Luxembourg', name: 'Europe/Luxembourg', value: 2 },
  { label: 'Madrid', name: 'Europe/Madrid', value: 2 },
  { label: 'Malta', name: 'Europe/Malta', value: 2 },
  { label: 'Maputo', name: 'Africa/Maputo', value: 2 },
  { label: 'Monaco', name: 'Europe/Monaco', value: 2 },
  { label: 'Moscow-01 - Kaliningrad', name: 'Europe/Kaliningrad', value: 2 },
  { label: 'Oslo', name: 'Europe/Oslo', value: 2 },
  { label: 'Paris', name: 'Europe/Paris', value: 2 },
  { label: 'Rome', name: 'Europe/Rome', value: 2 },
  { label: 'Stockholm', name: 'Europe/Stockholm', value: 2 },
  { label: 'Tirane', name: 'Europe/Tirane', value: 2 },
  { label: 'Tripoli', name: 'Africa/Tripoli', value: 2 },
  { label: 'Vienna', name: 'Europe/Vienna', value: 2 },
  { label: 'Warsaw', name: 'Europe/Warsaw', value: 2 },
  { label: 'Windhoek', name: 'Africa/Windhoek', value: 2 },
  { label: 'Zurich', name: 'Europe/Zurich', value: 2 },
  { label: 'Amman', name: 'Asia/Amman', value: 3 },
  { label: 'Athens', name: 'Europe/Athens', value: 3 },
  { label: 'Baghdad', name: 'Asia/Baghdad', value: 3 },
  { label: 'Beirut', name: 'Asia/Beirut', value: 3 },
  { label: 'Bucharest', name: 'Europe/Bucharest', value: 3 },
  { label: 'Chisinau', name: 'Europe/Chisinau', value: 3 },
  { label: 'Damascus', name: 'Asia/Damascus', value: 3 },
  { label: 'Gaza', name: 'Asia/Gaza', value: 3 },
  { label: 'Helsinki', name: 'Europe/Helsinki', value: 3 },
  { label: 'Istanbul', name: 'Europe/Istanbul', value: 3 },
  { label: 'Jerusalem', name: 'Asia/Jerusalem', value: 3 },
  { label: 'Kiev', name: 'Europe/Kiev', value: 3 },
  { label: 'Minsk', name: 'Europe/Minsk', value: 3 },
  { label: 'Moscow+00 - Moscow', name: 'Europe/Moscow', value: 3 },
  { label: 'Nairobi', name: 'Africa/Nairobi', value: 3 },
  { label: 'Nicosia', name: 'Asia/Nicosia', value: 3 },
  { label: 'Qatar', name: 'Asia/Qatar', value: 3 },
  { label: 'Riga', name: 'Europe/Riga', value: 3 },
  { label: 'Riyadh', name: 'Asia/Riyadh', value: 3 },
  { label: 'Sofia', name: 'Europe/Sofia', value: 3 },
  { label: 'Syowa', name: 'Antarctica/Syowa', value: 3 },
  { label: 'Tallinn', name: 'Europe/Tallinn', value: 3 },
  { label: 'Vilnius', name: 'Europe/Vilnius', value: 3 },
  { label: 'Baku', name: 'Asia/Baku', value: 4 },
  { label: 'Dubai', name: 'Asia/Dubai', value: 4 },
  { label: 'Mahe', name: 'Indian/Mahe', value: 4 },
  { label: 'Mauritius', name: 'Indian/Mauritius', value: 4 },
  { label: 'Moscow+01 - Samara', name: 'Europe/Samara', value: 4 },
  { label: 'Reunion', name: 'Indian/Reunion', value: 4 },
  { label: 'Tbilisi', name: 'Asia/Tbilisi', value: 4 },
  { label: 'Yerevan', name: 'Asia/Yerevan', value: 4 },
  { label: 'Kabul', name: 'Asia/Kabul', value: 4.5 },
  { label: 'Tehran', name: 'Asia/Tehran', value: 4.5 },
  { label: 'Aqtau', name: 'Asia/Aqtau', value: 5 },
  { label: 'Aqtobe', name: 'Asia/Aqtobe', value: 5 },
  { label: 'Ashgabat', name: 'Asia/Ashgabat', value: 5 },
  { label: 'Dushanbe', name: 'Asia/Dushanbe', value: 5 },
  { label: 'Karachi', name: 'Asia/Karachi', value: 5 },
  { label: 'Kerguelen', name: 'Indian/Kerguelen', value: 5 },
  { label: 'Maldives', name: 'Indian/Maldives', value: 5 },
  { label: 'Mawson', name: 'Antarctica/Mawson', value: 5 },
  { label: 'Moscow+02 - Yekaterinburg', name: 'Asia/Yekaterinburg', value: 5 },
  { label: 'Tashkent', name: 'Asia/Tashkent', value: 5 },
  { label: 'Colombo', name: 'Asia/Colombo', value: 5.5 },
  { label: 'India Standard Time', name: 'Asia/Calcutta', value: 5.5 },
  { label: 'Katmandu', name: 'Asia/Katmandu', value: 5.75 },
  { label: 'Almaty', name: 'Asia/Almaty', value: 6 },
  { label: 'Bishkek', name: 'Asia/Bishkek', value: 6 },
  { label: 'Chagos', name: 'Indian/Chagos', value: 6 },
  { label: 'Dhaka', name: 'Asia/Dhaka', value: 6 },
  { label: 'Moscow+03 - Omsk', name: 'Asia/Omsk', value: 6 },
  { label: 'Thimphu', name: 'Asia/Thimphu', value: 6 },
  { label: 'Vostok', name: 'Antarctica/Vostok', value: 6 },
  { label: 'Cocos', name: 'Indian/Cocos', value: 6.5 },
  { label: 'Rangoon', name: 'Asia/Yangon', value: 6.5 },
  { label: 'Bangkok', name: 'Asia/Bangkok', value: 7 },
  { label: 'Christmas', name: 'Indian/Christmas', value: 7 },
  { label: 'Davis', name: 'Antarctica/Davis', value: 7 },
  { label: 'Hanoi', name: 'Asia/Saigon', value: 7 },
  { label: 'Hovd', name: 'Asia/Hovd', value: 7 },
  { label: 'Jakarta', name: 'Asia/Jakarta', value: 7 },
  { label: 'Moscow+04 - Krasnoyarsk', name: 'Asia/Krasnoyarsk', value: 7 },
  { label: 'China Time - Beijing', name: 'PRC', value: 8 },
  { label: 'China Time - Hong Kong', name: 'Asia/Hong_Kong', value: 8 },
  { label: 'China Time - Shanghai', name: 'Asia/Shanghai', value: 8 },
  { label: 'China Time - Taibei', name: 'Asia/Taipei', value: 8 },
  { label: 'China Time - Chongqing', name: 'Asia/Chongqing', value: 8 },
  { label: 'Brunei', name: 'Asia/Brunei', value: 8 },
  { label: 'Casey', name: 'Antarctica/Casey', value: 8 },
  { label: 'Choibalsan', name: 'Asia/Choibalsan', value: 8 },
  { label: 'Kuala Lumpur', name: 'Asia/Kuala_Lumpur', value: 8 },
  { label: 'Makassar', name: 'Asia/Makassar', value: 8 },
  { label: 'Manila', name: 'Asia/Manila', value: 8 },
  { label: 'Moscow+05 - Irkutsk', name: 'Asia/Irkutsk', value: 8 },
  { label: 'Singapore', name: 'Asia/Singapore', value: 8 },
  { label: 'Ulaanbaatar', name: 'Asia/Ulaanbaatar', value: 8 },
  { label: 'Western Time - Perth', name: 'Australia/Perth', value: 8 },
  { label: 'Dili', name: 'Asia/Dili', value: 9 },
  { label: 'Jayapura', name: 'Asia/Jayapura', value: 9 },
  { label: 'Moscow+06 - Yakutsk', name: 'Asia/Yakutsk', value: 9 },
  { label: 'Palau', name: 'Pacific/Palau', value: 9 },
  { label: 'Pyongyang', name: 'Asia/Pyongyang', value: 9 },
  { label: 'Seoul', name: 'Asia/Seoul', value: 9 },
  { label: 'Tokyo', name: 'Asia/Tokyo', value: 9 },
  { label: 'Central Time - Adelaide', name: 'Australia/Adelaide', value: 9.5 },
  { label: 'Central Time - Darwin', name: 'Australia/Darwin', value: 9.5 },
  { label: "Dumont D'Urville", name: 'Antarctica/DumontDUrville', value: 10 },
  { label: 'Eastern Time - Brisbane', name: 'Australia/Brisbane', value: 10 },
  { label: 'Eastern Time - Hobart', name: 'Australia/Hobart', value: 10 },
  {
    label: 'Eastern Time - Melbourne',
    name: 'Australia/Melbourne',
    value: 10,
  },
  {
    label: 'Eastern Time - Melbourne, Sydney',
    name: 'Australia/Sydney',
    value: 10,
  },
  { label: 'Guam', name: 'Pacific/Guam', value: 10 },
  { label: 'Moscow+07 - Vladivostok', name: 'Asia/Vladivostok', value: 10 },
  { label: 'Port Moresby', name: 'Pacific/Port_Moresby', value: 10 },
  { label: 'Truk', name: 'Pacific/Chuuk', value: 10 },
  { label: 'Efate', name: 'Pacific/Efate', value: 11 },
  { label: 'Guadalcanal', name: 'Pacific/Guadalcanal', value: 11 },
  { label: 'Kosrae', name: 'Pacific/Kosrae', value: 11 },
  { label: 'Moscow+08 - Magadan', name: 'Asia/Magadan', value: 11 },
  { label: 'Norfolk', name: 'Pacific/Norfolk', value: 11 },
  { label: 'Noumea', name: 'Pacific/Noumea', value: 11 },
  { label: 'Ponape', name: 'Pacific/Pohnpei', value: 11 },
  { label: 'Auckland', name: 'Pacific/Auckland', value: 12 },
  { label: 'Fiji', name: 'Pacific/Fiji', value: 12 },
  { label: 'Funafuti', name: 'Pacific/Funafuti', value: 12 },
  { label: 'Kwajalein', name: 'Pacific/Kwajalein', value: 12 },
  { label: 'Majuro', name: 'Pacific/Majuro', value: 12 },
  {
    label: 'Moscow+09 - Petropavlovsk-Kamchatskiy',
    name: 'Asia/Kamchatka',
    value: 12,
  },
  { label: 'Nauru', name: 'Pacific/Nauru', value: 12 },
  { label: 'Tarawa', name: 'Pacific/Tarawa', value: 12 },
  { label: 'Wake', name: 'Pacific/Wake', value: 12 },
  { label: 'Wallis', name: 'Pacific/Wallis', value: 12 },
  { label: 'Apia', name: 'Pacific/Apia', value: 13 },
  { label: 'Enderbury', name: 'Pacific/Enderbury', value: 13 },
  { label: 'Fakaofo', name: 'Pacific/Fakaofo', value: 13 },
  { label: 'Tongatapu', name: 'Pacific/Tongatapu', value: 13 },
  { label: 'Kiritimati', name: 'Pacific/Kiritimati', value: 14 },
];
