'use-client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useEffect, useState } from 'react';

const fakeData = [
    {
        "data": {
            "kind": "calendar#events",
            "etag": "\"p32sfrclsqvbo00o\"",
            "summary": "ductt2@vmogroup.com",
            "description": "",
            "updated": "2023-08-12T17:50:38.051Z",
            "timeZone": "Asia/Ho_Chi_Minh",
            "accessRole": "freeBusyReader",
            "defaultReminders": [],
            "nextPageToken": "EjYKK2IydGc3OGlkcHByNXNuc25iYW9ra3Jia2dmXzIwMjMwODE4VDAyMzAwMFoYgOzC4fLlgAMiBwgFELDMtDY=",
            "items": [
                {
                    "kind": "calendar#event",
                    "etag": "\"3381079366156000\"",
                    "id": "b2tg78idppr5snsnbaokkrbkgf_20230814T023000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YjJ0Zzc4aWRwcHI1c25zbmJhb2trcmJrZ2ZfMjAyMzA4MTRUMDIzMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-28T10:21:23.078Z",
                    "start": {
                        "dateTime": "2023-08-14T09:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-14T10:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "b2tg78idppr5snsnbaokkrbkgf_R20230728T023000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3381079366156000\"",
                    "id": "b2tg78idppr5snsnbaokkrbkgf_20230815T023000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YjJ0Zzc4aWRwcHI1c25zbmJhb2trcmJrZ2ZfMjAyMzA4MTVUMDIzMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-28T10:21:23.078Z",
                    "start": {
                        "dateTime": "2023-08-15T09:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-15T10:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "b2tg78idppr5snsnbaokkrbkgf_R20230728T023000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3383725276102000\"",
                    "id": "hv5k24psf1kkpn3k1ntg215jid_20230815T061500Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=aHY1azI0cHNmMWtrcG4zazFudGcyMTVqaWRfMjAyMzA4MTVUMDYxNTAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-08-12T17:50:38.051Z",
                    "start": {
                        "dateTime": "2023-08-15T13:15:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-15T14:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "hv5k24psf1kkpn3k1ntg215jid_R20230808T061500@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3382968362606000\"",
                    "id": "bck9brcacmc4j1ua142nb7gpod_20230815T070000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YmNrOWJyY2FjbWM0ajF1YTE0Mm5iN2dwb2RfMjAyMzA4MTVUMDcwMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-08-08T08:43:01.303Z",
                    "start": {
                        "dateTime": "2023-08-15T14:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-15T15:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "bck9brcacmc4j1ua142nb7gpod@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3381079366156000\"",
                    "id": "b2tg78idppr5snsnbaokkrbkgf_20230816T023000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YjJ0Zzc4aWRwcHI1c25zbmJhb2trcmJrZ2ZfMjAyMzA4MTZUMDIzMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-28T10:21:23.078Z",
                    "start": {
                        "dateTime": "2023-08-16T09:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-16T10:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "b2tg78idppr5snsnbaokkrbkgf_R20230728T023000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3383101163952000\"",
                    "id": "00kk87edri3hjkgaccjok8n75b_20230816T040000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=MDBrazg3ZWRyaTNoamtnYWNjam9rOG43NWJfMjAyMzA4MTZUMDQwMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-08-09T03:09:41.976Z",
                    "start": {
                        "dateTime": "2023-08-16T11:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-16T11:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "00kk87edri3hjkgaccjok8n75b_R20230809T040000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3380852813664000\"",
                    "id": "2d5qgrjp0u50s1585btejtm5rt_20230816T060000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=MmQ1cWdyanAwdTUwczE1ODVidGVqdG01cnRfMjAyMzA4MTZUMDYwMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-27T02:53:26.832Z",
                    "start": {
                        "dateTime": "2023-08-16T13:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-16T14:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "2d5qgrjp0u50s1585btejtm5rt_R20230726T060000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3381079366156000\"",
                    "id": "b2tg78idppr5snsnbaokkrbkgf_20230817T023000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YjJ0Zzc4aWRwcHI1c25zbmJhb2trcmJrZ2ZfMjAyMzA4MTdUMDIzMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-28T10:21:23.078Z",
                    "start": {
                        "dateTime": "2023-08-17T09:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-17T10:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "b2tg78idppr5snsnbaokkrbkgf_R20230728T023000@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3382269107100000\"",
                    "id": "0u5g1f6s6fthkq314d4djd5j1u",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=MHU1ZzFmNnM2ZnRoa3EzMTRkNGRqZDVqMXUgZHVjdHQyQHZtb2dyb3VwLmNvbQ",
                    "updated": "2023-08-04T07:35:53.550Z",
                    "start": {
                        "dateTime": "2023-08-17T15:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-17T16:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "0u5g1f6s6fthkq314d4djd5j1u@google.com"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3381079366156000\"",
                    "id": "b2tg78idppr5snsnbaokkrbkgf_20230818T023000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YjJ0Zzc4aWRwcHI1c25zbmJhb2trcmJrZ2ZfMjAyMzA4MThUMDIzMDAwWiBkdWN0dDJAdm1vZ3JvdXAuY29t",
                    "updated": "2023-07-28T10:21:23.078Z",
                    "start": {
                        "dateTime": "2023-08-18T09:30:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2023-08-18T10:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "private",
                    "iCalUID": "b2tg78idppr5snsnbaokkrbkgf_R20230728T023000@google.com"
                }
            ]
        },
        "status": 200
    },
    {
        "data": {
            "kind": "calendar#events",
            "etag": "\"p328d3hsjs3co00o\"",
            "summary": "mrtranduc1994@gmail.com",
            "description": "",
            "updated": "2023-08-13T13:34:47.802Z",
            "timeZone": "Asia/Ho_Chi_Minh",
            "accessRole": "owner",
            "defaultReminders": [
                {
                    "method": "popup",
                    "minutes": 30
                }
            ],
            "nextPageToken": "EjYKK2MyMGo4ODZ1NWhhaWQwbjNvMGZqcnZuZHU4XzIwMjgwNzA2VDIzMTYwMFoYgJCDyYjuowMiBwgFELDMtDY=",
            "items": [
                {
                    "kind": "calendar#event",
                    "etag": "\"3112352382827000\"",
                    "id": "820kfmcg734vkk04qvcsur14l4_20240425T010000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=ODIwa2ZtY2c3MzR2a2swNHF2Y3N1cjE0bDRfMjAyNDA0MjVUMDEwMDAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2015-04-25T13:07:51.000Z",
                    "updated": "2023-04-25T01:11:51.482Z",
                    "summary": "Sinh nhật bố",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2024-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2024-04-25T09:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "820kfmcg734vkk04qvcsur14l4",
                    "originalStartTime": {
                        "dateTime": "2024-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "public",
                    "iCalUID": "820kfmcg734vkk04qvcsur14l4@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"2796762988186000\"",
                    "id": "c20j886u5haid0n3o0fjrvndu8_20240706T231600Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YzIwajg4NnU1aGFpZDBuM28wZmpydm5kdThfMjAyNDA3MDZUMjMxNjAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2014-04-24T23:18:14.000Z",
                    "updated": "2014-04-24T23:18:14.157Z",
                    "summary": "Sinh nhật mẹ",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2024-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2024-07-07T07:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "c20j886u5haid0n3o0fjrvndu8",
                    "originalStartTime": {
                        "dateTime": "2024-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "iCalUID": "c20j886u5haid0n3o0fjrvndu8@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3112352382827000\"",
                    "id": "820kfmcg734vkk04qvcsur14l4_20250425T010000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=ODIwa2ZtY2c3MzR2a2swNHF2Y3N1cjE0bDRfMjAyNTA0MjVUMDEwMDAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2015-04-25T13:07:51.000Z",
                    "updated": "2023-04-25T01:11:51.482Z",
                    "summary": "Sinh nhật bố",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2025-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2025-04-25T09:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "820kfmcg734vkk04qvcsur14l4",
                    "originalStartTime": {
                        "dateTime": "2025-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "public",
                    "iCalUID": "820kfmcg734vkk04qvcsur14l4@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"2796762988186000\"",
                    "id": "c20j886u5haid0n3o0fjrvndu8_20250706T231600Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YzIwajg4NnU1aGFpZDBuM28wZmpydm5kdThfMjAyNTA3MDZUMjMxNjAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2014-04-24T23:18:14.000Z",
                    "updated": "2014-04-24T23:18:14.157Z",
                    "summary": "Sinh nhật mẹ",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2025-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2025-07-07T07:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "c20j886u5haid0n3o0fjrvndu8",
                    "originalStartTime": {
                        "dateTime": "2025-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "iCalUID": "c20j886u5haid0n3o0fjrvndu8@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3112352382827000\"",
                    "id": "820kfmcg734vkk04qvcsur14l4_20260425T010000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=ODIwa2ZtY2c3MzR2a2swNHF2Y3N1cjE0bDRfMjAyNjA0MjVUMDEwMDAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2015-04-25T13:07:51.000Z",
                    "updated": "2023-04-25T01:11:51.482Z",
                    "summary": "Sinh nhật bố",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2026-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2026-04-25T09:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "820kfmcg734vkk04qvcsur14l4",
                    "originalStartTime": {
                        "dateTime": "2026-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "public",
                    "iCalUID": "820kfmcg734vkk04qvcsur14l4@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"2796762988186000\"",
                    "id": "c20j886u5haid0n3o0fjrvndu8_20260706T231600Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YzIwajg4NnU1aGFpZDBuM28wZmpydm5kdThfMjAyNjA3MDZUMjMxNjAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2014-04-24T23:18:14.000Z",
                    "updated": "2014-04-24T23:18:14.157Z",
                    "summary": "Sinh nhật mẹ",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2026-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2026-07-07T07:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "c20j886u5haid0n3o0fjrvndu8",
                    "originalStartTime": {
                        "dateTime": "2026-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "iCalUID": "c20j886u5haid0n3o0fjrvndu8@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3112352382827000\"",
                    "id": "820kfmcg734vkk04qvcsur14l4_20270425T010000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=ODIwa2ZtY2c3MzR2a2swNHF2Y3N1cjE0bDRfMjAyNzA0MjVUMDEwMDAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2015-04-25T13:07:51.000Z",
                    "updated": "2023-04-25T01:11:51.482Z",
                    "summary": "Sinh nhật bố",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2027-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2027-04-25T09:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "820kfmcg734vkk04qvcsur14l4",
                    "originalStartTime": {
                        "dateTime": "2027-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "public",
                    "iCalUID": "820kfmcg734vkk04qvcsur14l4@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"2796762988186000\"",
                    "id": "c20j886u5haid0n3o0fjrvndu8_20270706T231600Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YzIwajg4NnU1aGFpZDBuM28wZmpydm5kdThfMjAyNzA3MDZUMjMxNjAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2014-04-24T23:18:14.000Z",
                    "updated": "2014-04-24T23:18:14.157Z",
                    "summary": "Sinh nhật mẹ",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2027-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2027-07-07T07:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "c20j886u5haid0n3o0fjrvndu8",
                    "originalStartTime": {
                        "dateTime": "2027-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "iCalUID": "c20j886u5haid0n3o0fjrvndu8@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"3112352382827000\"",
                    "id": "820kfmcg734vkk04qvcsur14l4_20280425T010000Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=ODIwa2ZtY2c3MzR2a2swNHF2Y3N1cjE0bDRfMjAyODA0MjVUMDEwMDAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2015-04-25T13:07:51.000Z",
                    "updated": "2023-04-25T01:11:51.482Z",
                    "summary": "Sinh nhật bố",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2028-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2028-04-25T09:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "820kfmcg734vkk04qvcsur14l4",
                    "originalStartTime": {
                        "dateTime": "2028-04-25T08:00:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "visibility": "public",
                    "iCalUID": "820kfmcg734vkk04qvcsur14l4@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                },
                {
                    "kind": "calendar#event",
                    "etag": "\"2796762988186000\"",
                    "id": "c20j886u5haid0n3o0fjrvndu8_20280706T231600Z",
                    "status": "confirmed",
                    "htmlLink": "https://www.google.com/calendar/event?eid=YzIwajg4NnU1aGFpZDBuM28wZmpydm5kdThfMjAyODA3MDZUMjMxNjAwWiBtcnRyYW5kdWMxOTk0QG0",
                    "created": "2014-04-24T23:18:14.000Z",
                    "updated": "2014-04-24T23:18:14.157Z",
                    "summary": "Sinh nhật mẹ",
                    "creator": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "organizer": {
                        "email": "mrtranduc1994@gmail.com",
                        "displayName": "Duc Tran",
                        "self": true
                    },
                    "start": {
                        "dateTime": "2028-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "end": {
                        "dateTime": "2028-07-07T07:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "recurringEventId": "c20j886u5haid0n3o0fjrvndu8",
                    "originalStartTime": {
                        "dateTime": "2028-07-07T06:16:00+07:00",
                        "timeZone": "Asia/Ho_Chi_Minh"
                    },
                    "iCalUID": "c20j886u5haid0n3o0fjrvndu8@google.com",
                    "sequence": 0,
                    "reminders": {
                        "useDefault": false,
                        "overrides": [
                            {
                                "method": "popup",
                                "minutes": 10
                            }
                        ]
                    },
                    "eventType": "default"
                }
            ]
        },
        "status": 200
    }
];

const EVENT_BG_COLORS: { [key in number]: string } = {
    0: '#2ab7ca',
    1: '#fed766'
}
export default function Calendar() {
    const [events, setEvents] = useState<any[]>([]);
    const [errors, setErrors] = useState({ message: '' });
    useEffect(() => {
        async function fetchEvents() {
            try {
                // const response = await fetch(`http://localhost:3000/api/google/calendar`);
                // const data = await response.json();
                const data = fakeData;
                const newEvents: any[] = [];
                data?.forEach((dataItem: any, index: number) => {
                    dataItem.data.items.forEach((eventItem: any) => {
                        const { start, end } = eventItem;
                        const startTime = start.dateTime;
                        const endTime = end.dateTime;
                        newEvents.push({
                            id: eventItem.id,
                            url: eventItem.htmlLink,
                            title: eventItem?.summary ?? 'Meeting',
                            start: startTime,
                            end: endTime,
                            groupId: dataItem.summary,
                            extendedProps: {
                                status: 'done'
                            },
                            display: 'block',
                            borderColor: '#f4f4f8',
                            backgroundColor: EVENT_BG_COLORS[index]
                        });
                    });
                });
                setEvents(newEvents);
            } catch (error: any) {
                setErrors({ message: 'Something was wrong!' })
            }
        };
        fetchEvents();
    }, []);

    if (errors?.message) return <p className='text-center text-red-600 font-bold text-lg'>
        {errors?.message}
    </p>;
    return (
        <div className='p-4 h-screen'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    meridiem: false
                }}
                lazyFetching
                eventClick={(info) => {
                    info.jsEvent.preventDefault(); // don't let the browser navigate

                    if (info.event.url) window.open(info.event.url);
                }}
                height='100%'
            />
        </div>
    )
}
