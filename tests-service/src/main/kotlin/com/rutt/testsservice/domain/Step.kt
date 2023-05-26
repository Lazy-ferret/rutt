package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "test_step")
class Step {
    @Column(nullable = false)
    var name: String = ""

    @Column
    var description: String = ""

    /**
     * Used to persist position of this test step in case to DB
     */
    @Column
    var index: Int = -1

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id")
    @JsonIgnore
    var case: Case? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
}